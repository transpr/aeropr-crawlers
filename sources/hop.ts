import { gnewsSource } from "./google-news.js";

// HOP (Air France): gnews discovery fallback (completes European/French airline coverage).
export const hop: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hop",
  orgName: "HOP (Air France)",
  orgGroup: "Air France-KLM",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(HOP Air France) (site:hop.fr OR site:airfrance.com) when:30d",
});
