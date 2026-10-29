import { gnewsSource } from "./google-news.js";

// Fly2Sky: gnews discovery fallback (European coverage, full country list).
export const fly2sky: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "fly2sky",
  orgName: "Fly2Sky",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Fly2Sky") when:30d",
});
