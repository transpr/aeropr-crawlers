// Generic Google News RSS discovery adapter.
// Discovery layer: detects press releases, then run.ts fetches the ORIGINAL
// newsroom article URL (never inserts Google News URLs directly).
// <link> in Google News RSS is a news.google.com redirect that 302s to the
// publisher page. If Google changes the redirect format, the source fails the
// "structure changed" test and an issue is auto-created.
import type { Source, RawRelease, Sector } from "../src/types.js";
import * as cheerio from "cheerio";

export function gnewsSource(opts: {
  slug: string;
  orgName: string;
  orgGroup: string | null;
  alliance: string | null;
  type: Source["type"];
  sector: Sector;
  language: string;
  query: string;              // Google News query (site: or org terms)
}): Source {
  return {
    slug: opts.slug,
    sector: opts.sector,
    type: opts.type,
    layer: "discovery",
    orgName: opts.orgName,
    orgGroup: opts.orgGroup,
    alliance: opts.alliance,
    language: opts.language,
    listUrl: "https://news.google.com/rss/search?q=" + encodeURIComponent(opts.query) + "&hl=en-US&gl=US&ceid=US:en",
    parseList(xml, _baseUrl): RawRelease[] {
      const $$ = cheerio.load(xml, { xmlMode: true });
      const out: RawRelease[] = [];
      $$("item").each((_, el) => {
        const t = ($$("title", el).text() || "").trim();
        const link = ($$("link", el).text() || "").trim();
        const pubDate = ($$("pubDate", el).text() || "").trim();
        if (!t || !link) return;
        out.push({ title: t, url: link, publishedAt: pubDate, summary: "" });
      });
      return out.slice(0, 25);
    },
  };
}
