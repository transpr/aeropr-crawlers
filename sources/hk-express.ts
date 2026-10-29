import { gnewsSource } from "./google-news.js";

// HK Express: gnews discovery fallback (world scheduled-carrier completion).
export const hkExpress: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hk-express",
  orgName: "HK Express",
  orgGroup: "Cathay Pacific",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("HK Express" airline) when:30d",
});
