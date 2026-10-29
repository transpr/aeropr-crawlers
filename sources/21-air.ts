import { gnewsSource } from "./google-news.js";

// 21 Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const 21Air: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "21-air",
  orgName: "21 Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("21 Air" cargo) when:30d",
});
