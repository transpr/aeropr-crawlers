import { gnewsSource } from "./google-news.js";

// Bulgarian Air Charter: gnews discovery fallback (European coverage, full country list).
export const bgCharter: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bg-charter",
  orgName: "Bulgarian Air Charter",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Bulgarian Air Charter") when:30d",
});
