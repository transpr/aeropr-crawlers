// Alaska Airlines newsroom RSS — news.alaskaair.com/feed/.
// Covers Alaska Airlines, Hawaiian Airlines and Horizon Air press releases.
// The HTML newsroom is JS-rendered, but the RSS feed exposes title/link/pubDate.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const alaska: Source = {
  slug: "alaska",
  sector: "air",
  type: "airline",
  orgName: "Alaska Airlines",
  orgGroup: "Alaska Air Group",
  alliance: "Oneworld",
  language: "en",
  listUrl: "https://news.alaskaair.com/feed/",
  parseList(html, _baseUrl): RawRelease[] {
    const $$ = cheerio.load(html, { xmlMode: true });
    const out: RawRelease[] = [];
    $$("item").each((_, el) => {
      const title = ($$(el).find("title").first().text() ?? "").trim();
      let url = ($$(el).find("link").first().text() ?? "").trim();
      if (!url) return;
      url = abs(url, "https://news.alaskaair.com/");
      if (out.some((o) => o.url === url)) return;
      if (!title || title.length < 15 || title.length > 300) return;
      const d = ($$(el).find("pubDate").first().text() ?? "").trim();
      const publishedAt = d ? new Date(d).toISOString() : "";
      out.push({ title, url, publishedAt, summary: "" });
    });
    return out.slice(0, 30);
  },
};
