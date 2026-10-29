import { gnewsSource } from "./google-news.js";

// Binter Canarias: gnews discovery fallback (European coverage, full country list).
export const binter: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "binter",
  orgName: "Binter Canarias",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:bintercanarias.com) when:30d",
});
