// Generic RSS/Atom adapter — for organizations exposing a native feed.
// Reusable: pass the feed URL in opts. Items must link DIRECTLY to the
// original article (unlike google-news.ts which handles redirect links).
import type { Source, RawRelease } from "../src/types.js";
import * as cheerio from "cheerio";

export function rssSource(opts: {
  slug: string;
  orgName: string;
  orgGroup: string | null;
  alliance: string | null;
  type: Source["type"];
  sector: "air" | "rail";
  language: string;
  feedUrl: string;
}): Source {
  return {
    slug: opts.slug,
    sector: opts.sector,
    type: opts.type,
    orgName: opts.orgName,
    orgGroup: opts.orgGroup,
    alliance: opts.alliance,
    language: opts.language,
    listUrl: opts.feedUrl,
    parseList(xml, _baseUrl): RawRelease[] {
      const $$ = cheerio.load(xml, { xmlMode: true });
      const out: RawRelease[] = [];
      $$("item").each((_, el) => {
        const title = ($$("title", el).text() || "").trim();
        const link = ($$("link", el).text() || "").trim();
        const pubDate = ($$("pubDate", el).text() || ($$("date", el).text() || "")).trim();
        const summary = ($$("description", el).text() || "").trim().slice(0, 300);
        if (!title || !link || !/^https?:\/\//.test(link)) return;
        out.push({ title, url: link, publishedAt: pubDate, summary });
      });
      return out.slice(0, 25);
    },
  };
}
