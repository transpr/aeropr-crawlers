import { gnewsSource } from "./google-news.js";

// Hi Fly (airline): gnews discovery fallback (European coverage, full country list).
export const hifly: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hifly",
  orgName: "Hi Fly (airline)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Hi Fly" airline) when:30d",
});
