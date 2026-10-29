import { gnewsSource } from "./google-news.js";

// China Airlines (Taiwan): gnews discovery fallback (world scheduled-carrier completion).
export const chinaAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "china-airlines",
  orgName: "China Airlines (Taiwan)",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("China Airlines" Taiwan) when:30d",
});
