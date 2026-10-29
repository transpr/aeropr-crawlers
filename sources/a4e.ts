// Airlines for Europe (A4E) — industry association representing major EU carriers.
// Listing: a4e.eu with /news/<slug> links.
// Titles from the anchor text; original dates are not exposed in the listing HTML,
// so publishedAt is empty (the app shows an estimated-date badge, same as KLM).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const RELEASE_URL = /a4e\.eu\/news\/[a-z0-9-]{10,}\/?$/;
const EXCLUDE = /\/news\/?$|\/(wp-content|category|tag|author|page)\//;

export const a4e: Source = {
  slug: "a4e",
  sector: "air",
  type: "org",
  orgName: "Airlines for Europe",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.a4e.eu/news",
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
