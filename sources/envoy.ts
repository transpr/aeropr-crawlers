import { gnewsSource } from "./google-news.js";

// Envoy Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const envoy: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "envoy",
  orgName: "Envoy Air",
  orgGroup: "American Airlines Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Envoy Air") when:30d",
});
