import { gnewsSource } from "./google-news.js";

// Horizon Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const horizonAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "horizon-air",
  orgName: "Horizon Air",
  orgGroup: "Alaska Air Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Horizon Air") when:30d",
});
