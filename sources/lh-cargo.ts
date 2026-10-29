import { gnewsSource } from "./google-news.js";

// Lufthansa Cargo: gnews discovery fallback (European coverage, full country list).
export const lhCargo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lh-cargo",
  orgName: "Lufthansa Cargo",
  orgGroup: "Lufthansa Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:lufthansa-cargo.com) when:30d",
});
