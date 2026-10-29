import { gnewsSource } from "./google-news.js";

// Avelo Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const avelo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "avelo",
  orgName: "Avelo Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Avelo Airlines") when:30d",
});
