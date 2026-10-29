import { gnewsSource } from "./google-news.js";

// Southern Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const southernAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "southern-air",
  orgName: "Southern Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Southern Air" cargo) when:30d",
});
