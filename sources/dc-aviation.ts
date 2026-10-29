import { gnewsSource } from "./google-news.js";

// DC Aviation: gnews discovery fallback (European coverage, full country list).
export const dcAviation: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dc-aviation",
  orgName: "DC Aviation",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("DC Aviation") when:30d",
});
