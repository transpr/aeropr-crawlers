import { gnewsSource } from "./google-news.js";

// National Airlines (N8): gnews discovery fallback (US carriers per Wikipedia category list).
export const nationalAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "national-airlines",
  orgName: "National Airlines (N8)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("National Airlines" cargo) when:30d",
});
