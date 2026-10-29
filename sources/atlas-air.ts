import { gnewsSource } from "./google-news.js";

// Atlas Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const atlasAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "atlas-air",
  orgName: "Atlas Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Atlas Air") when:30d",
});
