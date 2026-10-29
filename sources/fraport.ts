// Fraport press releases — https://www.fraport.com/en/newsroom/pressreleases.html
// Server-rendered listing; article URLs match /newsroom/pressreleases/.
// If Fraport changes its structure, the run fails and an issue is auto-created.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const fraport: Source = {
  slug: "fraport",
  sector: "air",
  type: "airport",
  orgName: "Fraport",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.fraport.com/en/newsroom/pressreleases.html",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!/\/newsroom\/pressreleases\//.test(url)) return;
      // title: prefer inner heading, fallback to anchor text
      const title = ($$(el).find("h1,h2,h3,h4,h5,span").first().text() || $$(el).text() || "").trim();
      if (!title || title.length < 10) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
