import { gnewsSource } from "./google-news.js";

// Amaszonas: gnews discovery fallback (world scheduled-carrier completion).
export const amaszonas: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "amaszonas",
  orgName: "Amaszonas",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Amaszonas") when:30d",
});
