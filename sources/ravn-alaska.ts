import { gnewsSource } from "./google-news.js";

// Ravn Alaska: gnews discovery fallback (US carriers per Wikipedia category list).
export const ravnAlaska: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ravn-alaska",
  orgName: "Ravn Alaska",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Ravn Alaska") when:30d",
});
