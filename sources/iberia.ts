// Iberia (grupo.iberia.es) newsroom — IAG group, Spanish source.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const iberia: Source = {
  slug: "iberia",
  sector: "air",
  type: "airline",
  orgName: "Iberia",
  orgGroup: "IAG",
  alliance: "oneworld",
  language: "es",
  listUrl: "https://grupo.iberia.es/sala-de-prensa/notas-de-prensa",
  parseList(html, baseUrl): RawRelease[] {
    const $ = cheerio.load(html);
    const out: RawRelease[] = [];
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") ?? "";
      const url = abs(href, baseUrl);
      if (!/nota|prensa|noticia/i.test(url)) return;
      const title = $(el).text().replace(/\s+/g, " ").trim();
      if (!title || title.length < 15 || title.length > 300) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
