import { gnewsSource } from "./google-news.js";

// Spring Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const springAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "spring-airlines",
  orgName: "Spring Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Spring Airlines" China) when:30d",
});
