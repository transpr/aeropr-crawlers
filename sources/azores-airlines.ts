import { gnewsSource } from "./google-news.js";

// Azores Airlines: gnews discovery fallback (European coverage, full country list).
export const azoresAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "azores-airlines",
  orgName: "Azores Airlines",
  orgGroup: "SATA Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Azores Airlines") when:30d",
});
