// Main crawler run: scan every source, fetch details, normalize, upsert.
// Exit code 1 if a source fails completely (structure changed?) so the
// GitHub Action can report it and auto-create an issue.

import { sourcesFor } from "../sources/index.js";
import type { Source } from "./types.js";
import { upsertReleases, patchRelease, type ReleaseRow } from "./db.js";
import { categorize } from "./categorize.js";
import { translateToEnglish } from "./translate.js";
import { fetchHtml, genericBodyExtraction, genericDateExtraction } from "./html.js";

async function crawlSource(source: Source): Promise<ReleaseRow[]> {
  const html = await fetchHtml(source.listUrl);
  const raws = source.parseList(html, source.listUrl);
  if (raws.length === 0) {
    throw new Error(`No releases parsed from ${source.listUrl} — structure may have changed.`);
  }
  const rows: ReleaseRow[] = [];
  for (const raw of raws.slice(0, 10)) {
    try {
      const detailHtml = await fetchHtml(raw.url);
      const body = source.parseDetail
        ? source.parseDetail(detailHtml, raw.url).body
        : genericBodyExtraction(detailHtml);
      const publishedAt =
        raw.publishedAt ||
        (source.parseDetail?.(detailHtml, raw.url).publishedAt) ||
        genericDateExtraction(detailHtml) ||
        new Date().toISOString();
      rows.push({
        sector: source.sector,
        source_slug: source.slug,
        source_type: source.type,
        org_group: source.orgGroup,
        alliance: source.alliance,
        org_name: source.orgName,
        title: raw.title,
        published_at: publishedAt,
        source_url: raw.url,
        language: source.language,
        summary: raw.summary ?? "",
        body: body || raw.title,
        categories: categorize(`${raw.title}\n${body}`),
      });
    } catch (e: any) {
      console.warn(`  ! detail failed ${raw.url}: ${e.message}`);
    }
  }
  return rows;
}

async function main() {
  const sector = process.argv.find((a) => a.startsWith("--sector="))?.split("=")[1];
  const sources = sourcesFor(sector);
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
