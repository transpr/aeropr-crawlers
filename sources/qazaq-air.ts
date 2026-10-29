import { gnewsSource } from "./google-news.js";

// Qazaq Air: gnews discovery fallback (European coverage, full country list).
export const qazaqAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "qazaq-air",
  orgName: "Qazaq Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Qazaq Air") when:30d",
});
