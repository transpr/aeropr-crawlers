import { gnewsSource } from "./google-news.js";

// Royal Brunei Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const royalBrunei: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "royal-brunei",
  orgName: "Royal Brunei Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Royal Brunei Airlines") when:30d",
});
