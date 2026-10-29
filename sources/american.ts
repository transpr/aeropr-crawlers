// American Airlines — https://news.aa.com/ newsroom, server-rendered.
// Media-list signup also available: https://news.aa.com/subscribe/default.aspx
// (use cp-american@airpressrelease.com).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const american: Source = {
  slug: "american",
  sector: "air",
  type: "airline",
  orgName: "American Airlines",
  orgGroup: null,
  alliance: "oneworld",
  language: "en",
  listUrl: "https://news.aa.com/",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!/news\.aa\.com\/news/.test(url)) return;
      if (/\/subscribe/.test(url)) return;
      const title = ($$(el).find("h1,h2,h3,h4,h5").first().text() || $$(el).text() || "").trim();
      if (!title || title.length < 15) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
