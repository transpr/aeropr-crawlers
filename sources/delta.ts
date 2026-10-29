// Delta Air Lines newsroom — news.delta.com (listing on the root page).
// Exclude language versions and archive pages; only real /<slug> releases.
// Titles from the anchor text; original dates are not exposed in the listing HTML,
// so publishedAt is empty (the app shows an estimated-date badge, same as KLM).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const RELEASE_URL = /news\.delta\.com\/[a-z0-9-]{15,}\/?$/;
const EXCLUDE = /chinese|japanese|korean|news-archive|\/news\/?$|subscribe|sitemap|rss|\/?$/;

export const delta: Source = {
  slug: "delta",
  sector: "air",
  type: "airline",
  orgName: "Delta Air Lines",
  orgGroup: null,
  alliance: "SkyTeam",
  language: "en",
  listUrl: "https://news.delta.com/",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!RELEASE_URL.test(url) || EXCLUDE.test(url)) return;
      if (out.some((o) => o.url === url)) return;
      const lines = $$(el).text().split("\n").map((t) => t.trim()).filter(Boolean);
      const title = lines.sort((a, b) => b.length - a.length)[0] ?? "";
      if (!title || title.length < 15 || title.length > 300) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
