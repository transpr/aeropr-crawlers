import { gnewsSource } from "./google-news.js";

// Enter Air: gnews discovery fallback (European coverage, full country list).
export const enterAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "enter-air",
  orgName: "Enter Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Enter Air" Poland) when:30d",
});
