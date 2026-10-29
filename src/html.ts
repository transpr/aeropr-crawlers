// Generic HTML utilities shared by all crawlers.
// fetchHtml: direct fetch first; on anti-bot blocks (403), falls back
// to a headless Chromium via Playwright (real browser fingerprint).

import * as cheerio from "cheerio";

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en;q=0.9,fr;q=0.8",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Upgrade-Insecure-Requests": "1",
};

// --- Shared browser instance (lazy) ---
let browserPromise: Promise<any> | null = null;

async function getBrowser(): Promise<any> {
  if (!browserPromise) {
    browserPromise = import("playwright").then(async (pw: any) => {
      const b = await pw.chromium.launch({ headless: true });
      console.log("  [browser] headless chromium started (anti-bot fallback)");
      return b;
    });
  }
  return browserPromise;
}

async function fetchViaBrowser(url: string): Promise<string> {
  const browser = await getBrowser();
  const context = await browser.newContext({
    userAgent: BROWSER_HEADERS["User-Agent"],
    locale: "en-US",
    viewport: { width: 1366, height: 900 },
  });
  try {
    const page = await context.newPage();
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(1500); // let JS-rendered lists appear
    const html = await page.content();
    const status = response?.status() ?? 0;
    if (status >= 400) throw new Error(`browser GET ${url} -> ${status}`);
    return html;
  } finally {
    await context.close();
  }
}

export async function fetchHtml(url: string): Promise<string> {
  let directError: unknown = null;
  try {
    const res = await fetch(url, { headers: BROWSER_HEADERS, redirect: "follow" });
    if (res.ok) return res.text();
    directError = `HTTP ${res.status}`;
  } catch (e: any) {
    directError = e.message;
  }
  // Anti-bot fallback for 403/401 (and network-level blocks).
  try {
    return await fetchViaBrowser(url);
  } catch (e: any) {
    throw new Error(`direct (${directError}) and browser (${e.message}) both failed for ${url}`);
  }
}

export async function closeBrowser(): Promise<void> {
  if (browserPromise) {
    const b = await browserPromise;
    await b.close().catch(() => {});
    browserPromise = null;
  }
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

/** Clean canonical title: og:title > twitter:title > h1. */
export function genericTitleExtraction(html: string): string | undefined {
  const $ = cheerio.load(html);
  const og = $('meta[property="og:title"]').attr("content")
    ?? $('meta[name="twitter:title"]').attr("content");
  if (og && og.trim().length > 10 && og.trim().length < 300) return og.trim();
  const h1 = $("h1").first().text().replace(/\s+/g, " ").trim();
  if (h1.length > 10 && h1.length < 300) return h1;
  return undefined;
}

const MONTHS: Record<string, number> = {
  january: 0, januar: 0, janvier: 0, gennaio: 0, enero: 0, jan: 0,
  february: 1, februar: 1, février: 1, febbraio: 1, febrero: 1, feb: 1,
  march: 2, marz: 2, märz: 2, mars: 2, marzo: 2, mar: 2,
  april: 3, avril: 3, aprile: 3, abril: 3, apr: 3, avr: 3,
  may: 4, mai: 4, maggio: 4, mayo: 4, mag: 4,
  june: 5, juni: 5, juin: 5, giugno: 5, junio: 5, jun: 5, giu: 5,
  july: 6, juli: 6, juillet: 6, luglio: 6, julio: 6, jul: 6, juil: 6,
  august: 7, août: 7, agosto: 7, aug: 7,
  september: 8, septembre: 8, settembre: 8, septiembre: 8, sept: 8, sep: 8, set: 8,
  october: 9, oktober: 9, octobre: 9, ottobre: 9, octubre: 9, oct: 9, okt: 9,
  november: 10, november: 10, novembre: 10, novembre: 10, noviembre: 10, nov: 10,
  december: 11, dezember: 11, décembre: 11, dicembre: 11, diciembre: 11, dec: 11, déc: 11,
};

function clampDate(d: Date): Date | null {
  if (isNaN(d.getTime()) || d.getFullYear() < 1995) return null;
  const now = Date.now();
  if (d.getTime() > now + 5 * 60 * 1000) return new Date(now); // future/embargo → now
  return d;
}

/** Parse a human date string (ISO, numeric d/m/y, or EN/FR/DE/IT/ES month names). */
export function parseDateString(raw: string): Date | null {
  const s = raw.trim().replace(/(\d{1,2})(st|nd|rd|th)/gi, "$1");
  let m = s.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return clampDate(new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], 12)));
  m = s.match(/(\d{1,2})[.\/\-](\d{1,2})[.\/\-](\d{4})/);
  if (m) {
    let day = +m[1], month = +m[2];
    if (month > 12 && day <= 12) { const t = day; day = month; month = t; } // US M/D/YYYY
    if (month > 12) return null;
    return clampDate(new Date(Date.UTC(+m[3], month - 1, day, 12)));
  }
  m = s.match(/(\d{1,2})\s+([a-zA-Zàâäéèêëîïôöùûüçß]+)[.,]?\s+(\d{4})/);
  if (m && MONTHS[m[2].toLowerCase()] !== undefined)
    return clampDate(new Date(Date.UTC(+m[3], MONTHS[m[2].toLowerCase()], +m[1], 12)));
  m = s.match(/([a-zA-Zàâäéèêëîïôöùûüçß]+)\s+(\d{1,2})[.,]?\s+(\d{4})/);
  if (m && MONTHS[m[1].toLowerCase()] !== undefined)
    return clampDate(new Date(Date.UTC(+m[3], MONTHS[m[1].toLowerCase()], +m[2], 12)));
  return clampDate(new Date(s));
}

/**
 * Publication date, multi-strategy:
 *  1. meta article:published_time / date / publish-date / time[datetime]
 *  2. JSON-LD datePublished (WordPress, Drupal, TMG, PR platforms…)
 *  3. first plausible date in visible page text
 * Future dates clamped to now (embargo protection).
 * Returns undefined when nothing trustworthy is found — caller must NOT invent one.
 */
export function genericDateExtraction(html: string): string | undefined {
  const $$ = cheerio.load(html);
  const meta = $$('meta[property="article:published_time"]').attr("content")
    ?? $$('meta[name="date"]').attr("content")
    ?? $$('meta[name="publish-date"]').attr("content")
    ?? $$("time[datetime]").first().attr("datetime")
    ?? $$('meta[itemprop="datePublished"]').attr("content");
  if (meta) {
    const d = parseDateString(meta);
    if (d) return d.toISOString();
  }
  const ld = $$('script[type="application/ld+json"]').text();
  if (ld) {
    try {
      const parsed = JSON.parse(ld);
      const objs: any[] = Array.isArray(parsed)
        ? parsed
        : parsed?.["@graph"] ?? [parsed];
      for (const o of objs) {
        const dp = o?.datePublished;
        if (dp) { const d = parseDateString(String(dp)); if (d) return d.toISOString(); }
      }
    } catch { /* malformed JSON-LD: ignore */ }
  }
  $$("script, style, nav, header, footer, aside, form, noscript").remove();
  const text = $$("body").text().replace(/\s+/g, " ").slice(0, 4000);
  const re = new RegExp(
    "(\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December" +
    "|Januar|Februar|März|Oktober|Dezember" +
    "|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre" +
    "|gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre" +
    "|enero|febrero|abril|mayo|junio|julio|septiembre|octubre|noviembre|diciembre)[.,]?\s+\d{4})" +
    "|((?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}[,.]?\s+\d{4})" +
    "|(\d{1,2}[.\/-]\d{1,2}[.\/-]\d{4})|(\d{4}-\d{2}-\d{2})", "i");
  const m = text.match(re);
  if (m) {
    const d = parseDateString(m[0]);
    if (d) return d.toISOString();
  }
  return undefined;
}
