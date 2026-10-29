// airBaltic newsroom — company.airbaltic.com/en/newsroom (Vuetify/JS app).
// Listing anchors (?press=2026/<slug>) may carry no usable text, so titles
// fall back to the URL slug. The detail page (?press=…) server-renders the
// full release inside a dialog: parseDetail extracts it from the page text,
// between the LAST occurrence of the release title and the "Share this
// event" marker (the listing above repeats every title once).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const RELEASE_URL = /\/en\/newsroom\?press=(\d{4})\/([a-z0-9-]{15,})/;

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

export const airbaltic: Source = {
  slug: "airbaltic",
  sector: "air",
  type: "airline",
  orgName: "airBaltic",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://company.airbaltic.com/en/newsroom",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      const m = url.match(RELEASE_URL);
      if (!m) return;
      if (out.some((o) => o.url === url)) return;
      const slugWords = m[2].split("-").filter((w) => w.length > 3);
      const lines = $$(el).text().split("\n").map((t) => t.trim()).filter(Boolean);
      const title =
        lines.find(
          (l) =>
            l.length >= 15 && l.length <= 300 &&
            slugWords.filter((w) => l.toLowerCase().includes(w)).length >= 2,
        ) ?? titleFromSlug(m[2]);
      if (title.length < 15) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
  parseDetail(html, baseUrl) {
    const m = baseUrl.match(RELEASE_URL);
    if (!m) return { body: "" };
    const title = titleFromSlug(m[2]);
    const $$ = cheerio.load(html);
    $$("script, style, noscript").remove();
    const text = $$("body").text();
    const shareIdx = text.indexOf("Share this event");
    if (shareIdx < 0) return { body: "" };
    // The dialog holds the full release; the listing above repeats the title
    // once, so take the LAST occurrence before the share marker.
    const tIdx = text.toLowerCase().lastIndexOf(title.slice(0, 60).toLowerCase(), shareIdx);
    if (tIdx < 0) return { body: "" };
    const lines = text
      .slice(tIdx, shareIdx)
      .split("\n")
      .map((l) => l.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    if (lines.length && lines[0].toLowerCase().startsWith(title.slice(0, 20).toLowerCase())) lines.shift();
    const body = lines.join("\n\n");
    if (body.length < 200) return { body: "" };
    const dateM = text
      .slice(Math.max(0, tIdx - 120), tIdx)
      .match(/(\d{1,2})\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i);
    return { title, body, publishedAt: dateM ? dateM[0] : undefined };
  },
};
