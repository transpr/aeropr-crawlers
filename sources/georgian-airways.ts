import { gnewsSource } from "./google-news.js";

// Georgian Airways: gnews discovery fallback (European coverage, full country list).
export const georgianAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "georgian-airways",
  orgName: "Georgian Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Georgian Airways") when:30d",
});
