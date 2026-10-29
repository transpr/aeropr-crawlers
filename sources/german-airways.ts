import { gnewsSource } from "./google-news.js";

// German Airways: gnews discovery fallback (European coverage, full country list).
export const germanAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "german-airways",
  orgName: "German Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("German Airways") when:30d",
});
