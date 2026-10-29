import { gnewsSource } from "./google-news.js";

// Neos (airline): gnews discovery fallback (European coverage, full country list).
export const neos: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "neos",
  orgName: "Neos (airline)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Neos" airline Italy) when:30d",
});
