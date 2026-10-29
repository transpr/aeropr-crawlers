import { gnewsSource } from "./google-news.js";

// Nok Air: gnews discovery fallback (world scheduled-carrier completion).
export const nokAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "nok-air",
  orgName: "Nok Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Nok Air") when:30d",
});
