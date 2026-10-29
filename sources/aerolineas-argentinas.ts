import { gnewsSource } from "./google-news.js";

// Aerolíneas Argentinas: gnews discovery fallback (world scheduled-carrier completion).
export const aerolineasArgentinas: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aerolineas-argentinas",
  orgName: "Aerolíneas Argentinas",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Aerolíneas Argentinas") when:30d",
});
