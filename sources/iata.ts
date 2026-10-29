// IATA pressroom — international organization.
// Only real releases/speeches pages (2026-releases/, 2026-speeches/...),
// excluding listing, signup, archive and fact-sheet pages.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const RELEASE_URL = /\/en\/pressroom\/\d{4}-(releases|speeches)\//;

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
      if (!RELEASE_URL.test(url)) return;
      if (out.some((o) => o.url === url)) return;
      // First meaningful text line of the anchor = title (avoids concatenated descriptions).
      const lines = $(el).text().split("\n").map((t) => t.trim()).filter(Boolean);
      const title = lines[0] ?? "";
      if (!title || title.length < 15 || title.length > 300) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
