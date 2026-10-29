import { gnewsSource } from "./google-news.js";

// LBA (Luftfahrt-Bundesamt): gnews discovery fallback (newsroom not directly crawlable from runners).
export const lba: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lba",
  orgName: "LBA (Luftfahrt-Bundesamt)",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:lba.de) when:30d",
});
