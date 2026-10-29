import { gnewsSource } from "./google-news.js";

// Caribbean Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const caribbeanAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "caribbean-airlines",
  orgName: "Caribbean Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Caribbean Airlines") when:30d",
});
