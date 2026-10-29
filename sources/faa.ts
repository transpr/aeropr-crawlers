// FAA press releases — https://www.faa.gov/newsroom/press_releases
// Drupal listing, server-rendered; article URLs contain "press_release".
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const faa: Source = {
  slug: "faa",
  sector: "air",
  type: "regulator",
  orgName: "FAA",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.faa.gov/newsroom/press_releases",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!/faa\.gov\/.*(press_release|newsroom)/.test(url)) return;
      if (/\/(newsroom|press_releases)\/?$/.test(url)) return; // listing pages
      const title = ($$(el).find("h1,h2,h3,h4,h5").first().text() || $$(el).text() || "").trim();
      if (!title || title.length < 15) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
