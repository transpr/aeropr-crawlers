import { gnewsSource } from "./google-news.js";

// ASL Airlines Hungary: gnews discovery fallback (European coverage, full country list).
export const aslHungary: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "asl-hungary",
  orgName: "ASL Airlines Hungary",
  orgGroup: "ASL Aviation Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("ASL Airlines Hungary") when:30d",
});
