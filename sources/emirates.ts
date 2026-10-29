// Emirates Media Centre — emirates.com/media-centre/en/.
// Release links are /media-centre/<slug> (language variants excluded).
// Titles from the anchor text; original dates are not exposed in the listing HTML,
// so publishedAt is empty (the app shows an estimated-date badge, same as KLM).
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const RELEASE_URL = /media-centre\/[a-z0-9-]{10,}\/?$/;
const EXCLUDE = /\/media-centre\/\/(fr|es|ar-ae|en-us|de|it|pt|zh|ja|ru)\b|\/[a-z]{2}-[a-z]{2}\//;

export const emirates: Source = {
  slug: "emirates",
  sector: "air",
  type: "airline",
  orgName: "Emirates",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.emirates.com/media-centre/en/",
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
