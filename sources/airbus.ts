// Airbus press releases — https://www.airbus.com/en/newsroom/press-releases
// URL slugs carry the year-month (2026-10-...); the full day is written in the card text.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const MONTHS: Record<string, number> = { January:0, February:1, March:2, April:3, May:4, June:5, July:6, August:7, September:8, October:9, November:10, December:11 };

export const airbus: Source = {
  slug: "airbus",
  sector: "air",
  type: "oem",
  orgName: "Airbus",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.airbus.com/en/newsroom/press-releases",
  parseList(html, baseUrl): RawRelease[] {
    const $ = cheerio.load(html);
    const out: RawRelease[] = [];
    $("a[href]").each((_, el) => {
      const url = abs($(el).attr("href") ?? "", baseUrl);
      const m = url.match(/\/en\/newsroom\/press-releases\/(\d{4})-(\d{2})-/);
      if (!m) return;
      if (out.some((o) => o.url === url)) return;
      const lines = $(el).text().split("\n").map((t) => t.trim()).filter(Boolean);
      const title = lines.sort((a, b) => b.length - a.length)[0] ?? "";
      if (!title || title.length < 15) return;
      const container = $(el).closest("div, li, article").text() ?? "";
      const dm = container.match(/(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/);
      const publishedAt = dm
        ? new Date(Date.UTC(Number(dm[3]), MONTHS[dm[2]], Number(dm[1]), 12)).toISOString()
        : m[1] + "-" + m[2] + "-01T12:00:00Z";
      out.push({ title, url, publishedAt, summary: "" });
    });
    return out.slice(0, 30);
  },
};
