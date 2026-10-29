import { gnewsSource } from "./google-news.js";

// Cebu Pacific: gnews discovery fallback (world scheduled-carrier completion).
export const cebuPacific: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cebu-pacific",
  orgName: "Cebu Pacific",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Cebu Pacific") when:30d",
});
