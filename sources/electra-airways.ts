import { gnewsSource } from "./google-news.js";

// Electra Airways: gnews discovery fallback (European coverage, full country list).
export const electraAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "electra-airways",
  orgName: "Electra Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Electra Airways") when:30d",
});
