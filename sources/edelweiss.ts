import { gnewsSource } from "./google-news.js";

// Edelweiss Air: gnews discovery fallback (European coverage, full country list).
export const edelweiss: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "edelweiss",
  orgName: "Edelweiss Air",
  orgGroup: "Lufthansa Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Edelweiss Air") when:30d",
});
