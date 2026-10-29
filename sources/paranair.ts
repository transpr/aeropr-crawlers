import { gnewsSource } from "./google-news.js";

// Paranair: gnews discovery fallback (world scheduled-carrier completion).
export const paranair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "paranair",
  orgName: "Paranair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Paranair") when:30d",
});
