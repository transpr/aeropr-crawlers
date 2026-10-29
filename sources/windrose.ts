import { gnewsSource } from "./google-news.js";

// Windrose Aviation: gnews discovery fallback (European coverage, full country list).
export const windrose: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "windrose",
  orgName: "Windrose Aviation",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Windrose" aviation Ukraine) when:30d",
});
