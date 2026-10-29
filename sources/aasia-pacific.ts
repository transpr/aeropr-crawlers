import { gnewsSource } from "./google-news.js";

// Asia Pacific Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const aasiaPacific: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aasia-pacific",
  orgName: "Asia Pacific Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Asia Pacific Airlines" cargo) when:30d",
});
