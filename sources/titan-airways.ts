import { gnewsSource } from "./google-news.js";

// Titan Airways: gnews discovery fallback (European coverage, full country list).
export const titanAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "titan-airways",
  orgName: "Titan Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Titan Airways") when:30d",
});
