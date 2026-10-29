// Generic HTML utilities shared by all crawlers.

import * as cheerio from "cheerio";

export async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; AeroPRBot/0.1; +https://aeropr.fr/bot)",
      "Accept-Language": "en;q=0.9,fr;q=0.8",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

export function abs(href: string, baseUrl: string): string {
  try {
    return new URL(href, baseUrl).toString().split("#")[0];
  } catch {
    return href;
  }
}

export function genericBodyExtraction(html: string): string {
  const $ = cheerio.load(html);
  $("script, style, nav, header, footer, aside, form, noscript").remove();
  const candidates = ["article", '[role="main"]', "main", ".press-release", ".article-body", ".content", "body"]
    .map((sel) => $(sel).first())
    .filter(($el) => $el.length && $el.text().trim().length > 200);
  const $best = candidates[0] ?? $("body");
  const paragraphs: string[] = [];
  $best.find("p, h1, h2, h3").each((_, el) => {
    const t = $(el).text().replace(/\s+/g, " ").trim();
    if (t.length > 2) paragraphs.push(t);
  });
  return paragraphs.join("\n\n").trim();
}

export function genericDateExtraction(html: string): string | undefined {
  const $ = cheerio.load(html);
  const iso = $('meta[property="article:published_time"]').attr("content")
    ?? $('meta[name="date"]').attr("content")
    ?? $("time[datetime]").first().attr("datetime");
  if (iso) {
    const d = new Date(iso);
    if (!isNaN(d.getTime())) return d.toISOString();
  }
  return undefined;
}
