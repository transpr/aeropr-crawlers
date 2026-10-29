import { gnewsSource } from "./google-news.js";

// Armenia Airways: gnews discovery fallback (European coverage, full country list).
export const armeniaAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "armenia-airways",
  orgName: "Armenia Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Armenia Airways") when:30d",
});
