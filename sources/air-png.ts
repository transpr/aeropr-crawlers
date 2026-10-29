import { gnewsSource } from "./google-news.js";

// Air Niugini (Papua New Guinea): gnews discovery fallback (world scheduled-carrier completion).
export const airPng: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-png",
  orgName: "Air Niugini (Papua New Guinea)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Niugini") when:30d",
});
