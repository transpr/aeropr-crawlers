import { gnewsSource } from "./google-news.js";

// Seaborne Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const seaborne: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "seaborne",
  orgName: "Seaborne Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Seaborne Airlines") when:30d",
});
