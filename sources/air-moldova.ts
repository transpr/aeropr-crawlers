import { gnewsSource } from "./google-news.js";

// Air Moldova: gnews discovery fallback (European coverage, full country list).
export const airMoldova: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-moldova",
  orgName: "Air Moldova",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Moldova") when:30d",
});
