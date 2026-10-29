import { gnewsSource } from "./google-news.js";

// Sky Express (Greece): gnews discovery fallback (European coverage, full country list).
export const skyExpress: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sky-express",
  orgName: "Sky Express (Greece)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Sky Express" Greece) when:30d",
});
