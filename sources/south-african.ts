import { gnewsSource } from "./google-news.js";

// South African Airways: gnews discovery fallback (world scheduled-carrier completion).
export const southAfrican: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "south-african",
  orgName: "South African Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("South African Airways") when:30d",
});
