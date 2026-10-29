import { gnewsSource } from "./google-news.js";

// Solomon Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const solomonAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "solomon-airlines",
  orgName: "Solomon Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Solomon Airlines") when:30d",
});
