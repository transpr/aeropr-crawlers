import { gnewsSource } from "./google-news.js";

// Air China: gnews discovery fallback (world scheduled-carrier completion).
export const airChina: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-china",
  orgName: "Air China",
  orgGroup: "Air China Group",
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air China") when:30d",
});
