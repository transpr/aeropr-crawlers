import { gnewsSource } from "./google-news.js";

// Qantas: gnews discovery fallback (newsroom not directly crawlable from runners).
export const qantas: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "qantas",
  orgName: "Qantas",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:qantas.com) when:30d",
});
