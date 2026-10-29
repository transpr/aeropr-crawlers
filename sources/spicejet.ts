import { gnewsSource } from "./google-news.js";

// SpiceJet: gnews discovery fallback (world scheduled-carrier completion).
export const spicejet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "spicejet",
  orgName: "SpiceJet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SpiceJet") when:30d",
});
