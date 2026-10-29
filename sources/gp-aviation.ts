import { gnewsSource } from "./google-news.js";

// GP Aviation: gnews discovery fallback (European coverage, full country list).
export const gpAviation: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gp-aviation",
  orgName: "GP Aviation",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("GP Aviation" airline) when:30d",
});
