// MTU Aero Engines — https://www.mtu.de/newsroom/press/ press listing.
// Detail pages live under /newsroom/press/...; listing/archive pages excluded.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const mtu: Source = {
  slug: "mtu",
  sector: "air",
  type: "oem",
  orgName: "MTU Aero Engines",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.mtu.de/newsroom/press/",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$("a[href]").each((_, el) => {
      const url = abs($$(el).attr("href") ?? "", baseUrl);
      if (!/mtu\.de\/newsroom\/press\/.+/.test(url)) return;
      if (/\/(press|press-archive)\/?$/.test(url)) return; // listing pages
      const title = ($$(el).find("h1,h2,h3,h4,h5").first().text() || $$(el).text() || "").trim();
      if (!title || title.length < 15) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
