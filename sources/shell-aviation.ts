// Shell Aviation — https://www.shell.com/business-customers/aviation/news-and-media-releases.html
// Media releases for current + preceding six years; detail pages under same path.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const shellAviation: Source = {
  slug: "shell-aviation",
  sector: "air",
  type: "fuel",
  orgName: "Shell Aviation",
  orgGroup: "Shell",
  alliance: null,
  language: "en",
  listUrl: "https://www.shell.com/business-customers/aviation/news-and-media-releases.html",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    const listUrl = "https://www.shell.com/business-customers/aviation/news-and-media-releases.html";
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!/shell\.com\/business-customers\/aviation\/.+/.test(url)) return;
      if (url === listUrl) return;
      const title = ($$(el).find("h1,h2,h3,h4,h5").first().text() || $$(el).text() || "").trim();
      if (!title || title.length < 15) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
