import { gnewsSource } from "./google-news.js";

// Thai Lion Air: gnews discovery fallback (world scheduled-carrier completion).
export const thaiLion: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "thai-lion",
  orgName: "Thai Lion Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Thai Lion Air") when:30d",
});
