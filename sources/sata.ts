import { gnewsSource } from "./google-news.js";

// SATA Air Açores: gnews discovery fallback (European coverage, full country list).
export const sata: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sata",
  orgName: "SATA Air Açores",
  orgGroup: "SATA Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SATA Air Açores") when:30d",
});
