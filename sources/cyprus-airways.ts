import { gnewsSource } from "./google-news.js";

// Cyprus Airways: gnews discovery fallback (European coverage, full country list).
export const cyprusAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cyprus-airways",
  orgName: "Cyprus Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Cyprus Airways") when:30d",
});
