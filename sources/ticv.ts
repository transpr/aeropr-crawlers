import { gnewsSource } from "./google-news.js";

// TICV Cabo Verde: gnews discovery fallback (European coverage, full country list).
export const ticv: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ticv",
  orgName: "TICV Cabo Verde",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("TICV" Cabo Verde) when:30d",
});
