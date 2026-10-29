import { gnewsSource } from "./google-news.js";

// LATAM Colombia: gnews discovery fallback (world scheduled-carrier completion).
export const lanColombia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lan-colombia",
  orgName: "LATAM Colombia",
  orgGroup: "LATAM Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("LATAM Colombia") when:30d",
});
