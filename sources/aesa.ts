import { gnewsSource } from "./google-news.js";

// AESA (Agencia Estatal de Seguridad Aérea): gnews discovery fallback (newsroom not directly crawlable from runners).
export const aesa: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aesa",
  orgName: "AESA (Agencia Estatal de Seguridad Aérea)",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:seguridadaerea.gob.es) when:30d",
});
