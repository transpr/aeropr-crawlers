import { gnewsSource } from "./google-news.js";

// Viva Aerobus: gnews discovery fallback (world scheduled-carrier completion).
export const vivaAerobus: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "viva-aerobus",
  orgName: "Viva Aerobus",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Viva Aerobus") when:30d",
});
