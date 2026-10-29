import { gnewsSource } from "./google-news.js";

// Royal Air Maroc: gnews discovery fallback (world scheduled-carrier completion).
export const ram: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ram",
  orgName: "Royal Air Maroc",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Royal Air Maroc") when:30d",
});
