// WestJet — https://westjet.mediaroom.com/ (West Digital mediaroom platform).
// Article URLs are date-prefixed: /2024-05-30-WestJet-Group-...
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const westjet: Source = {
  slug: "westjet",
  sector: "air",
  type: "airline",
  orgName: "WestJet",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://westjet.mediaroom.com/",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!/mediaroom\.com\/\d{4}-\d{2}-\d{2}-/.test(url)) return;
      const title = ($$(el).find("h1,h2,h3,h4,h5").first().text() || $$(el).text() || "").trim();
      if (!title || title.length < 15) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
