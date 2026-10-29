import { gnewsSource } from "./google-news.js";

// Air Mauritius: gnews discovery fallback (world scheduled-carrier completion).
export const airMauritius: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-mauritius",
  orgName: "Air Mauritius",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Mauritius") when:30d",
});
