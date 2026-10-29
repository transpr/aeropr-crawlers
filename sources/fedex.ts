import { gnewsSource } from "./google-news.js";

// FedEx Express: gnews discovery fallback (US carriers per Wikipedia category list).
export const fedex: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "fedex",
  orgName: "FedEx Express",
  orgGroup: "FedEx",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("FedEx" aviation OR "FedEx Express") when:30d",
});
