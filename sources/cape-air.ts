import { gnewsSource } from "./google-news.js";

// Cape Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const capeAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cape-air",
  orgName: "Cape Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Cape Air") when:30d",
});
