import { gnewsSource } from "./google-news.js";

// LATAM Brasil: gnews discovery fallback (world scheduled-carrier completion).
export const latamBrasil: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "latam-brasil",
  orgName: "LATAM Brasil",
  orgGroup: "LATAM Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("LATAM Brasil") when:30d",
});
