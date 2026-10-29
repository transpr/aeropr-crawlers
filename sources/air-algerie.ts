import { gnewsSource } from "./google-news.js";

// Air Algérie: gnews discovery fallback (world scheduled-carrier completion).
export const airAlgerie: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-algerie",
  orgName: "Air Algérie",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Algérie") when:30d",
});
