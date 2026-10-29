import { gnewsSource } from "./google-news.js";

// Poste Air Cargo: gnews discovery fallback (European coverage, full country list).
export const posteAirCargo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "poste-air-cargo",
  orgName: "Poste Air Cargo",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Poste Air Cargo") when:30d",
});
