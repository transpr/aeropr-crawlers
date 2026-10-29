import { gnewsSource } from "./google-news.js";

// Nyxair: gnews discovery fallback (European coverage, full country list).
export const nyxair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "nyxair",
  orgName: "Nyxair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Nyxair") when:30d",
});
