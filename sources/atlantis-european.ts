import { gnewsSource } from "./google-news.js";

// Atlantis European Airways: gnews discovery fallback (European coverage, full country list).
export const atlantisEuropean: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "atlantis-european",
  orgName: "Atlantis European Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Atlantis European Airways") when:30d",
});
