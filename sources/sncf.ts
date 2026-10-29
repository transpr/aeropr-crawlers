// SNCF Group press room — first rail source (RailPR).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const sncf: Source = {
  slug: "sncf-group",
  sector: "rail",
  type: "group",
  orgName: "SNCF",
  orgGroup: "SNCF",
  alliance: null,
  language: "fr",
  listUrl: "https://www.sncf.com/fr/presse/communiques-de-presse",
  parseList(html, baseUrl): RawRelease[] {
    const $ = cheerio.load(html);
    const out: RawRelease[] = [];
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") ?? "";
      const url = abs(href, baseUrl);
      if (!/communique|presse|actualit/i.test(url)) return;
      const title = $(el).text().replace(/\s+/g, " ").trim();
      if (!title || title.length < 15 || title.length > 300) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
