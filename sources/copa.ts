import { gnewsSource } from "./google-news.js";

// Copa Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const copa: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "copa",
  orgName: "Copa Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Copa Airlines") when:30d",
});
