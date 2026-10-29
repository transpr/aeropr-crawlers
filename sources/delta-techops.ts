import { gnewsSource } from "./google-news.js";

// Delta TechOps: gnews discovery fallback (newsroom not directly crawlable from runners).
export const deltaTechops: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "delta-techops",
  orgName: "Delta TechOps",
  orgGroup: "Delta Air Lines",
  alliance: null,
  type: "mro",
  sector: "air",
  language: "en",
  query: "(Delta TechOps) (site:deltatechops.com OR site:news.delta.com) when:30d",
});
