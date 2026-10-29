import { gnewsSource } from "./google-news.js";

// Spring Airlines Japan: gnews discovery fallback (world scheduled-carrier completion).
export const springJapan: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "spring-japan",
  orgName: "Spring Airlines Japan",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Spring Japan" airline) when:30d",
});
