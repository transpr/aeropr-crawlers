// Southwest Airlines — investor press releases.
// No public RSS; corporate newsroom (swamedia.com) is bot-walled.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const southwest: Source = {
  slug: "southwest",
  sector: "air",
  type: "airline",
  orgName: "Southwest Airlines",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://investors.southwest.com/news-events/press-releases",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!/southwest\.com\/news-events\/press-releases\/.+/.test(url)) return;
      if (/press-releases\/?$/.test(url)) return; // listing page
      const title = ($$(el).find("h1,h2,h3,h4,h5").first().text() || $$(el).text() || "").trim();
      if (!title || title.length < 15) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
