import { gnewsSource } from "./google-news.js";

// Madagascar Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const madagascarAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "madagascar-airlines",
  orgName: "Madagascar Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Madagascar Airlines" OR "Air Madagascar") when:30d",
});
