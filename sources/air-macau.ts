import { gnewsSource } from "./google-news.js";

// Air Macau: gnews discovery fallback (world scheduled-carrier completion).
export const airMacau: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-macau",
  orgName: "Air Macau",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Macau") when:30d",
});
