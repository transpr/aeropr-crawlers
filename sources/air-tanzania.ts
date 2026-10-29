import { gnewsSource } from "./google-news.js";

// Air Tanzania: gnews discovery fallback (world scheduled-carrier completion).
export const airTanzania: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-tanzania",
  orgName: "Air Tanzania",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Tanzania") when:30d",
});
