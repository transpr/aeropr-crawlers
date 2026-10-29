// Boeing mediaroom — https://boeing.mediaroom.com/news-releases-statements
// URLs start with the full publication date: /2026-09-16-Title-...
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const boeing: Source = {
  slug: "boeing",
  sector: "air",
  type: "oem",
  orgName: "Boeing",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://boeing.mediaroom.com/news-releases-statements",
  parseList(html, baseUrl): RawRelease[] {
    const $ = cheerio.load(html);
    const out: RawRelease[] = [];
    $("a[href]").each((_, el) => {
      const url = abs($(el).attr("href") ?? "", baseUrl);
      const m = url.match(/boeing\.mediaroom\.com\/(\d{4})-(\d{2})-(\d{2})-/);
      if (!m) return;
      if (out.some((o) => o.url === url)) return;
      const lines = $(el).text().split("\n").map((t) => t.trim()).filter(Boolean);
      const title = lines.sort((a, b) => b.length - a.length)[0] ?? "";
      if (!title || title.length < 15) return;
      const publishedAt = m[1] + "-" + m[2] + "-" + m[3] + "T12:00:00Z";
      out.push({ title, url, publishedAt, summary: "" });
    });
    return out.slice(0, 30);
  },
};
