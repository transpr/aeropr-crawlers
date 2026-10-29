import { gnewsSource } from "./google-news.js";

// Globaljet Austria: gnews discovery fallback (European coverage, full country list).
export const globaljetAustria: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "globaljet-austria",
  orgName: "Globaljet Austria",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Globaljet Austria") when:30d",
});
