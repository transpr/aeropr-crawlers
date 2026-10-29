import { gnewsSource } from "./google-news.js";

// RwandAir: gnews discovery fallback (world scheduled-carrier completion).
export const rwandair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "rwandair",
  orgName: "RwandAir",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("RwandAir") when:30d",
});
