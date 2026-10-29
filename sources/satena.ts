import { gnewsSource } from "./google-news.js";

// SATENA (Colombia): gnews discovery fallback (world scheduled-carrier completion).
export const satena: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "satena",
  orgName: "SATENA (Colombia)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SATENA") when:30d",
});
