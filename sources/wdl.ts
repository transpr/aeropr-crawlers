import { gnewsSource } from "./google-news.js";

// WDL Aviation: gnews discovery fallback (European coverage, full country list).
export const wdl: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "wdl",
  orgName: "WDL Aviation",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("WDL Aviation") when:30d",
});
