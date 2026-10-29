import { gnewsSource } from "./google-news.js";

// Air Burkina: gnews discovery fallback (world scheduled-carrier completion).
export const airBurkina: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-burkina",
  orgName: "Air Burkina",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Burkina") when:30d",
});
