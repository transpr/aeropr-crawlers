// Generic HTML utilities shared by all crawlers.
// fetchHtml: direct fetch first; on anti-bot blocks (403), falls back
// to a headless Chromium via Playwright (real browser fingerprint).

import * as cheerio from "cheerio";

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
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

export function genericDateExtraction(html: string): string | undefined {
  const $ = cheerio.load(html);
  const iso = $('meta[property="article:published_time"]').attr("content")
    ?? $('meta[name="date"]').attr("content")
    ?? $('meta[name="publish-date"]').attr("content")
    ?? $("time[datetime]").first().attr("datetime");
  if (iso) {
    const d = new Date(iso);
    if (!isNaN(d.getTime())) return d.toISOString();
  }
  return undefined;
}
