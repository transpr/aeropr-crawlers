import { gnewsSource } from "./google-news.js";

// FlyOne (Moldova): gnews discovery fallback (European coverage, full country list).
export const flyOne: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "fly-one",
  orgName: "FlyOne (Moldova)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("FlyOne" Airlines) when:30d",
});
