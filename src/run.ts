// Main crawler run: scan every source, fetch details, normalize, upsert.
// Exit code 1 if a source fails completely (structure changed?) so the
// GitHub Action can report it and auto-create an issue.
//
// Layers:
//   --layer=direct     → scrape + RSS newsrooms (cron */5)
//   --layer=discovery  → Google News RSS discovery (cron hourly, empty = OK)

import { sourcesFor } from "../sources/index.js";
import type { Source } from "./types.js";
import { upsertReleases, patchRelease, type ReleaseRow } from "./db.js";
import { categorize } from "./categorize.js";
import { translateToEnglish } from "./translate.js";
import {
  fetchHtml, closeBrowser,
  genericBodyExtraction, genericDateExtraction, genericTitleExtraction, parseDateString,
} from "./html.js";

// Titles that mean "the extractor read the newsroom shell", not a release
// (JS-heavy sites where og:title is the page chrome, e.g. "Newsroom").
const GENERIC_TITLE_RE = /^(newsroom|news|media|press|press releases|latest|home|update|announcements?)\b/i;

async function crawlSource(source: Source): Promise<ReleaseRow[]> {
  const html = await fetchHtml(source.listUrl);
  const raws = source.parseList(html, source.listUrl);
  if (raws.length === 0) {
    if (source.layer === "discovery") return []; // no news in 30d is normal
    throw new Error(`No releases parsed from ${source.listUrl} — structure may have changed.`);
  }
  const rows: ReleaseRow[] = [];
  for (const raw of raws.slice(0, 10)) {
    try {
      const detailHtml = await fetchHtml(raw.url);
      const detail = source.parseDetail ? source.parseDetail(detailHtml, raw.url) : undefined;
      const body = (detail?.body || genericBodyExtraction(detailHtml) || raw.summary || "").trim();
      if (body.length < 120 && (raw.summary || "").trim().length < 120) {
        console.warn(`  ? body extraction unusable, skipping ${raw.url} (better missing than an empty page)`);
        continue;
      }
      // A parseDetail title (>= 10 chars) wins: some sites ship a wrong og:title
      // (e.g. Cargolux returns "Media releases" on every release page).
      // A GENERIC og:title ("Newsroom", "Press releases"…) means the detail page
      // is a JS shell — trust the listing/RSS title instead.
      const genericTitle = genericTitleExtraction(detailHtml);
      const title = (detail?.title && detail.title.length >= 10 ? detail.title : undefined)
        ?? (genericTitle && !GENERIC_TITLE_RE.test(genericTitle) ? genericTitle : undefined)
        ?? raw.title;
      // Publication date: NEVER fabricate one. Priority: listing/RSS date,
      // source-specific detail date, generic extraction (meta / JSON-LD / text).
      let publishedAt: string | null = null;
      for (const cand of [raw.publishedAt, detail?.publishedAt, genericDateExtraction(detailHtml)]) {
        if (!cand) continue;
        const d = parseDateString(cand);
        if (d) { publishedAt = d.toISOString(); break; }
      }
      if (!publishedAt) {
        console.warn(`  ? no publish date found, skipping ${raw.url} (better missing than wrongly dated)`);
        continue;
      }
      rows.push({
        sector: source.sector,
        source_slug: source.slug,
        source_type: source.type,
        org_group: source.orgGroup,
        alliance: source.alliance,
        org_name: source.orgName,
        title,
        published_at: publishedAt,
        source_url: raw.url,
        language: source.language,
        summary: raw.summary ?? "",
        body,
        categories: categorize(`${title}\n${body}`),
      });
    } catch (e: any) {
      console.warn(`  ! detail failed ${raw.url}: ${e.message}`);
    }
  }
  return rows;
}

async function main() {
  const sector = process.argv.find((a) => a.startsWith("--sector="))?.split("=")[1];
  const layer = process.argv.find((a) => a.startsWith("--layer="))?.split("=")[1];
  let sources = sourcesFor(sector);
  if (layer === "direct") sources = sources.filter((s) => s.layer !== "discovery");
  else if (layer === "discovery") sources = sources.filter((s) => s.layer === "discovery");
  let failures: string[] = [];
  let inserted = 0;

  for (const source of sources) {
    console.log(`-> ${source.slug} (${source.listUrl})`);
    try {
      const rows = await crawlSource(source);
      const fresh = await upsertReleases(rows);
      inserted += fresh.length;
      console.log(`  ${rows.length} parsed, ${fresh.length} new`);
      for (const row of fresh as any[]) {
        if (row.language && row.language !== "en" && !row.body_en) {
          const en = await translateToEnglish(`${row.title}\n\n${row.body}`);
          await patchRelease(row.id, { body_en: en });
          console.log(`  ~ translated ${row.source_slug}: ${row.title.slice(0, 50)}...`);
        }
      }
    } catch (e: any) {
      console.error(`  X ${source.slug}: ${e.message}`);
      failures.push(`${source.slug}: ${e.message}`);
    }
  }

  await closeBrowser();
  console.log(`\nDone. ${inserted} new release(s). ${failures.length} source failure(s).`);
  if (failures.length > 0) {
    console.error("FAILED_SOURCES:\n" + failures.join("\n"));
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
