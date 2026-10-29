import { gnewsSource } from "./google-news.js";

// EGO Airways: gnews discovery fallback (European coverage, full country list).
export const egoAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ego-airways",
  orgName: "EGO Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EGO Airways") when:30d",
});
