// IATA pressroom — international organization.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const iata: Source = {
  slug: "iata",
  sector: "air",
  type: "org",
  orgName: "IATA",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.iata.org/en/pressroom/",
  parseList(html, baseUrl): RawRelease[] {
    const $ = cheerio.load(html);
    const out: RawRelease[] = [];
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") ?? "";
      const url = abs(href, baseUrl);
      if (!/pressroom|press-release|pr\?/i.test(url)) return;
      const title = $(el).text().replace(/\s+/g, " ").trim();
      if (!title || title.length < 15 || title.length > 300) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
