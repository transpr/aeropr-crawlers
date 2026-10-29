// airBaltic newsroom — company.airbaltic.com/en/newsroom.
// The listing is a Vue app: anchors (?press=2026/<slug>) have no text in the raw HTML,
// so the title is derived from the URL slug (readable, hyphen-separated words).
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
      const lines = $$(el).text().split("\n").map((t) => t.trim()).filter(Boolean);
      const title = (lines.sort((a, b) => b.length - a.length)[0] ?? "") || titleFromSlug(m[2]);
      if (!title || title.length < 15 || title.length > 300) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
