import { gnewsSource } from "./google-news.js";

// Malta MedAir: gnews discovery fallback (European coverage, full country list).
export const maltaMedair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "malta-medair",
  orgName: "Malta MedAir",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Malta MedAir") when:30d",
});
