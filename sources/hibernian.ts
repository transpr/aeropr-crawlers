import { gnewsSource } from "./google-news.js";

// Hibernian Airlines: gnews discovery fallback (European coverage, full country list).
export const hibernian: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hibernian",
  orgName: "Hibernian Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Hibernian Airlines") when:30d",
});
