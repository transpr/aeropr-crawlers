import { gnewsSource } from "./google-news.js";

// Air Congo: gnews discovery fallback (world scheduled-carrier completion).
export const airCongo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-congo",
  orgName: "Air Congo",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Congo" airline) when:30d",
});
