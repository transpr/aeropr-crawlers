import { gnewsSource } from "./google-news.js";

// Air Rarotonga: gnews discovery fallback (world scheduled-carrier completion).
export const airRarotonga: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-rarotonga",
  orgName: "Air Rarotonga",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Rarotonga") when:30d",
});
