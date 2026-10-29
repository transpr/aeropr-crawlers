// Cargolux media releases — cargolux.com/media/media-releases/ (Craft CMS).
// Listing cards: .article-teaser-body with h4 (title), p (summary, "Luxembourg, 01 July 2026 – ...")
// and a "Read more" link. Detail pages have og:title = "Media releases" (template bug),
// so parseDetail overrides the title with the real h1.
import type { Source, RawRelease } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

const MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December";
const DATE_RE = new RegExp("\\b(\\d{1,2})\\s+(" + MONTHS + ")\\s+(\\d{4})\\b", "i");

function toIso(m: RegExpMatchArray | null): string {
  if (!m) return "";
  const months = MONTHS.split("|").map((s) => s.toLowerCase());
  const day = Number(m[1]);
  const month = months.indexOf(m[2].toLowerCase()) + 1;
  const year = Number(m[3]);
  if (!month) return "";
  const d = new Date(Date.UTC(year, month - 1, day, 12));
  return isNaN(d.getTime()) ? "" : d.toISOString();
}

export const cargolux: Source = {
  slug: "cargolux",
  sector: "air",
  type: "airline",
  orgName: "Cargolux",
  orgGroup: null,
  alliance: null,
  language: "en",
  listUrl: "https://www.cargolux.com/media/media-releases/",
  parseList(html, baseUrl): RawRelease[] {
    const $$ = cheerio.load(html);
    const out: RawRelease[] = [];
    $$(".article-teaser-body").each((_, el) => {
      const $card = $$(el);
      const title = ($card.find("h4").first().text() ?? "").replace(/\s+/g, " ").trim();
      const href = $card.find("a[href]").first().attr("href") ?? "";
      if (!title || title.length < 10 || title.length > 300 || !href) return;
      const url = abs(href, baseUrl);
      if (!/\/media\/media-releases\/\d{4}\//.test(url)) return;
      if (out.some((o) => o.url === url)) return;
      const summary = ($card.find("p").first().text() ?? "").replace(/\s+/g, " ").trim();
      out.push({ title, url, publishedAt: toIso(summary.match(DATE_RE)), summary });
    });
    return out.slice(0, 30);
  },
  parseDetail(html, _baseUrl) {
    const $$ = cheerio.load(html);
    const title = ($$("h1").first().text() ?? "").replace(/\s+/g, " ").trim();
    $$("script, style, nav, header, footer, aside, form, noscript").remove();
    const paragraphs: string[] = [];
    $$("article p, main p, .article-body p, body p").each((_, el) => {
      const t = $$(el).text().replace(/\s+/g, " ").trim();
      if (t.length > 2) paragraphs.push(t);
    });
    return {
      title: title.length >= 10 ? title : "",
      body: paragraphs.join("\n\n").trim(),
    };
  },
};
