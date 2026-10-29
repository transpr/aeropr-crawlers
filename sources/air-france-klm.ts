// Air France-KLM Group newsroom — group press releases.
import type { Source } from "../src/types.js";
import { abs } from "../src/html.js";
import * as cheerio from "cheerio";

export const airFranceKlm: Source = {
  slug: "air-france-klm",
  sector: "air",
  type: "group",
  orgName: "Air France-KLM Group",
  orgGroup: "Air France-KLM",
  alliance: "SkyTeam",
  language: "en",
  listUrl: "https://www.airfranceklm.com/en/news",
  parseList(html, baseUrl) {
    const $ = cheerio.load(html);
    const out: { title: string; url: string; publishedAt: string; summary: string }[] = [];
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") ?? "";
      const url = abs(href, baseUrl);
      if (!/\/(news|press|communiqu|media)\b/i.test(url)) return;
      const title = $(el).text().replace(/\s+/g, " ").trim();
      if (!title || title.length < 15 || title.length > 300) return;
      if (out.some((o) => o.url === url)) return;
      out.push({ title, url, publishedAt: "", summary: "" });
    });
    return out.slice(0, 30);
  },
};
