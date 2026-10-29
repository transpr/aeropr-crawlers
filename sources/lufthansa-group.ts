// Lufthansa Group newsroom — covers LH, SWISS, Austrian, Brussels, Eurowings, Discover.
// Listing: newsroom.lufthansagroup.com/en/ with /en/<slug> release links.
// Titles from the anchor text; original dates are not exposed in the listing HTML,
// so publishedAt is empty (the app shows an estimated-date badge, same as KLM).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const RELEASE_URL = /\/en\/[a-z0-9-]{20,}\/?$/;
const EXCLUDE = /\/(de|fr|it|es)\/|\/(en|de)\/?$|newsletter|pressemitteilungen|\/themen\//;

export const lufthansaGroup: Source = {
  slug: "lufthansa-group",
  sector: "air",
  type: "group",
  orgName: "Lufthansa Group",
  orgGroup: "Lufthansa Group",
  alliance: "Star Alliance",
  language: "en",
  listUrl: "https://newsroom.lufthansagroup.com/en/",
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
