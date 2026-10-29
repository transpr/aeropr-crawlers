import { gnewsSource } from "./google-news.js";

// China Southern Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const chinaSouthern: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "china-southern",
  orgName: "China Southern Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("China Southern") when:30d",
});
