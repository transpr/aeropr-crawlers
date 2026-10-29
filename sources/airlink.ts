import { gnewsSource } from "./google-news.js";

// Airlink (South Africa): gnews discovery fallback (world scheduled-carrier completion).
export const airlink: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "airlink",
  orgName: "Airlink (South Africa)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Airlink" South Africa) when:30d",
});
