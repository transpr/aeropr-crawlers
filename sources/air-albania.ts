import { gnewsSource } from "./google-news.js";

// Air Albania: gnews discovery fallback (European coverage, full country list).
export const airAlbania: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-albania",
  orgName: "Air Albania",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Albania") when:30d",
});
