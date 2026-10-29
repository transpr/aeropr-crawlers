import { gnewsSource } from "./google-news.js";

// People's Viennaline: gnews discovery fallback (European coverage, full country list).
export const peoplesViennaline: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "peoples-viennaline",
  orgName: "People's Viennaline",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("People's Viennaline" OR "Peoples Viennaline") when:30d",
});
