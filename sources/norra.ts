import { gnewsSource } from "./google-news.js";

// NORRA (Nordic Regional Airlines): gnews discovery fallback (European coverage, full country list).
export const norra: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "norra",
  orgName: "NORRA (Nordic Regional Airlines)",
  orgGroup: "Finnair",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("NORRA" "Nordic Regional Airlines") when:30d",
});
