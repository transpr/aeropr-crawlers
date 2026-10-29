import { gnewsSource } from "./google-news.js";

// Tailwind Airlines: gnews discovery fallback (European coverage, full country list).
export const tailwind: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tailwind",
  orgName: "Tailwind Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Tailwind Airlines") when:30d",
});
