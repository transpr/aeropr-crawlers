import { gnewsSource } from "./google-news.js";

// Azul: gnews discovery fallback (newsroom not directly crawlable from runners).
export const azul: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "azul",
  orgName: "Azul",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:voeazul.com.br OR site:azul.com.br) when:30d",
});
