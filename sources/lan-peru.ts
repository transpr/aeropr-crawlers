import { gnewsSource } from "./google-news.js";

// LATAM Perú: gnews discovery fallback (world scheduled-carrier completion).
export const lanPeru: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lan-peru",
  orgName: "LATAM Perú",
  orgGroup: "LATAM Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("LATAM Perú") when:30d",
});
