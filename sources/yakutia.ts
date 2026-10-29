import { gnewsSource } from "./google-news.js";

// Yakutia Airlines: gnews discovery fallback (European coverage, full country list).
export const yakutia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "yakutia",
  orgName: "Yakutia Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Yakutia" airline) when:30d",
});
