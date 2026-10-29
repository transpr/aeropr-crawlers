import { gnewsSource } from "./google-news.js";

// Israir: gnews discovery fallback (European coverage, full country list).
export const israir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "israir",
  orgName: "Israir",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Israir") when:30d",
});
