// Ryanair corporate news — https://corporate.ryanair.com/news/
// Cards carry ISO datetime attributes; titles are the anchor text.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const ryanair: Source = {
  slug: "ryanair",
  sector: "air",
  type: "airline",
  orgName: "Ryanair",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://corporate.ryanair.com/news/",
  parseList(html, baseUrl): RawRelease[] {
    const $ = cheerio.load(html);
    const out: RawRelease[] = [];
    $("a[href]").each((_, el) => {
      const url = abs($(el).attr("href") ?? "", baseUrl);
      if (!/^https:\/\/corporate\.ryanair\.com\/news\/[^/]+\/$/.test(url)) return;
      if (out.some((o) => o.url === url)) return;
      const lines = $(el).text().split("\n").map((t) => t.trim()).filter(Boolean);
      const title = lines.sort((a, b) => b.length - a.length)[0] ?? "";
      if (!title || title.length < 15) return;
      const container = $(el).closest("div, li, article");
      const dt = container.find("time[datetime]").attr("datetime") ?? "";
      out.push({ title, url, publishedAt: dt || "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
