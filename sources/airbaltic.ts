// airBaltic newsroom — company.airbaltic.com/en/newsroom.
// Release URLs carry a ?press=2026/<slug> query parameter: easy to isolate.
// Titles from the anchor text; original dates are not exposed in the listing HTML,
// so publishedAt is empty (the app shows an estimated-date badge, same as KLM).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const RELEASE_URL = /\/en\/newsroom\?press=/;
const EXCLUDE = /press=\s*$|\?press=$/;

export const airbaltic: Source = {
  slug: "airbaltic",
  sector: "air",
  type: "airline",
  orgName: "airBaltic",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://company.airbaltic.com/en/newsroom",
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
