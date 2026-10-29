import { gnewsSource } from "./google-news.js";

// Onur Air: gnews discovery fallback (European coverage, full country list).
export const onurAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "onur-air",
  orgName: "Onur Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Onur Air") when:30d",
});
