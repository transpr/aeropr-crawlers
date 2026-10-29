import { gnewsSource } from "./google-news.js";

// Air Montenegro: gnews discovery fallback (European coverage, full country list).
export const airMontenegro: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-montenegro",
  orgName: "Air Montenegro",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Montenegro") when:30d",
});
