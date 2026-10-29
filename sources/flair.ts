import { gnewsSource } from "./google-news.js";

// Flair Airlines (Canada): gnews discovery fallback (world scheduled-carrier completion).
export const flair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "flair",
  orgName: "Flair Airlines (Canada)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Flair Airlines") when:30d",
});
