import { gnewsSource } from "./google-news.js";

// EgyptAir: gnews discovery fallback (world scheduled-carrier completion).
export const egyptair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "egyptair",
  orgName: "EgyptAir",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EgyptAir") when:30d",
});
