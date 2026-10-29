import { gnewsSource } from "./google-news.js";

// PSA Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const psaAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "psa-airlines",
  orgName: "PSA Airlines",
  orgGroup: "American Airlines Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("PSA Airlines") when:30d",
});
