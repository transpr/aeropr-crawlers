import { gnewsSource } from "./google-news.js";

// Voyage Air: gnews discovery fallback (European coverage, full country list).
export const voyageAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "voyage-air",
  orgName: "Voyage Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Voyage Air" Bulgaria) when:30d",
});
