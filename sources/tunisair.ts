import { gnewsSource } from "./google-news.js";

// Tunisair: gnews discovery fallback (world scheduled-carrier completion).
export const tunisair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tunisair",
  orgName: "Tunisair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Tunisair") when:30d",
});
