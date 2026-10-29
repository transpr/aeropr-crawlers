// KLM newsroom (Presspage CMS) — https://news.klm.com/
// The group site airfranceklm.com is Cloudflare-blocked, but the KLM newsroom
// itself is public. Article slugs are listed on the homepage; dates are
// extracted from the article detail page by the generic extractor.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

// Category/landing pages to exclude (not press releases).
const EXCLUDE = new Set([
  "company", "image-bank", "economy", "about", "contact", "press",
  "dossier-climate", "dossier-fleet", "dossier-schiphol",
]);

function humanize(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export const klm: Source = {
  slug: "klm",
  sector: "air",
  type: "airline",
  orgName: "KLM",
  orgGroup: "Air France-KLM",
  alliance: "SkyTeam",
  language: "en",
  listUrl: "https://news.klm.com/",
  parseList(html, baseUrl): RawRelease[] {
    const $ = cheerio.load(html);
    const out: RawRelease[] = [];
    $("a[href]").each((_, el) => {
      const url = abs($(el).attr("href") ?? "", baseUrl);
      const m = url.match(/^https:\/\/news\.klm\.com\/([a-z0-9-]+)\/?$/);
      if (!m) return;
      const slug = m[1];
      if (EXCLUDE.has(slug) || slug.length < 10) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title: humanize(slug), url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
