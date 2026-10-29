import { gnewsSource } from "./google-news.js";

// SkyUp Airlines: gnews discovery fallback (European coverage, full country list).
export const skyup: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "skyup",
  orgName: "SkyUp Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SkyUp") when:30d",
});
