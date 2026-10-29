import { gnewsSource } from "./google-news.js";

// Akasa Air: gnews discovery fallback (world scheduled-carrier completion).
export const akasa: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "akasa",
  orgName: "Akasa Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Akasa Air") when:30d",
});
