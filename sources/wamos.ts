import { gnewsSource } from "./google-news.js";

// Wamos Air: gnews discovery fallback (European coverage, full country list).
export const wamos: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "wamos",
  orgName: "Wamos Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Wamos Air") when:30d",
});
