// United Airlines mediaroom RSS (Q4 platform) — united.mediaroom.com/news-releases?pagetemplate=rss.
// The main hub.united.com newsroom is unreachable from datacenter IPs, but the
// Q4 mediaroom RSS is public and exposes title/link/pubDate.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const united: Source = {
  slug: "united",
  sector: "air",
  type: "airline",
  orgName: "United Airlines",
  orgGroup: "United Airlines Holdings",
  alliance: "Star Alliance",
  language: "en",
  listUrl: "https://united.mediaroom.com/news-releases?pagetemplate=rss",
  parseList(html, _baseUrl): RawRelease[] {
    const $$ = cheerio.load(html, { xmlMode: true });
    const out: RawRelease[] = [];
    $$("item").each((_, el) => {
      const title = ($$(el).find("title").first().text() ?? "").trim();
      let url = ($$(el).find("link").first().text() ?? "").trim();
      if (!url) return;
      url = abs(url, "https://united.mediaroom.com/");
      if (out.some((o) => o.url === url)) return;
      if (!title || title.length < 15 || title.length > 300) return;
      const d = ($$(el).find("pubDate").first().text() ?? "").trim();
      const publishedAt = d ? new Date(d).toISOString() : "";
      out.push({ title, url, publishedAt, summary: "" });
    });
    return out.slice(0, 30);
  },
};
