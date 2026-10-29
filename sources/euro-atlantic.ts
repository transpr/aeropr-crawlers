import { gnewsSource } from "./google-news.js";

// Euro Atlantic Airways: gnews discovery fallback (European coverage, full country list).
export const euroAtlantic: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "euro-atlantic",
  orgName: "Euro Atlantic Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Euro Atlantic Airways") when:30d",
});
