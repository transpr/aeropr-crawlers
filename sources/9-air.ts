import { gnewsSource } from "./google-news.js";

// 9 Air: gnews discovery fallback (world scheduled-carrier completion).
export const 9Air: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "9-air",
  orgName: "9 Air",
  orgGroup: "Juneyao",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("9 Air" China) when:30d",
});
