import { gnewsSource } from "./google-news.js";

// Cabo Verde Airlines: gnews discovery fallback (European coverage, full country list).
export const caboVerde: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cabo-verde",
  orgName: "Cabo Verde Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Cabo Verde Airlines" OR "TACV") when:30d",
});
