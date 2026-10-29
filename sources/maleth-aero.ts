import { gnewsSource } from "./google-news.js";

// Maleth Aero: gnews discovery fallback (European coverage, full country list).
export const malethAero: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "maleth-aero",
  orgName: "Maleth Aero",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Maleth Aero") when:30d",
});
