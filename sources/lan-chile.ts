import { gnewsSource } from "./google-news.js";

// LATAM Chile: gnews discovery fallback (world scheduled-carrier completion).
export const lanChile: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lan-chile",
  orgName: "LATAM Chile",
  orgGroup: "LATAM Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("LATAM Chile") when:30d",
});
