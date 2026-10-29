import { gnewsSource } from "./google-news.js";

// Endeavor Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const endeavor: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "endeavor",
  orgName: "Endeavor Air",
  orgGroup: "Delta Air Lines",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Endeavor Air") when:30d",
});
