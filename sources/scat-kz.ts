import { gnewsSource } from "./google-news.js";

// SCAT Airlines: gnews discovery fallback (European coverage, full country list).
export const scatKz: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "scat-kz",
  orgName: "SCAT Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SCAT Airlines") when:30d",
});
