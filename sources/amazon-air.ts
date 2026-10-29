import { gnewsSource } from "./google-news.js";

// Amazon Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const amazonAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "amazon-air",
  orgName: "Amazon Air",
  orgGroup: "Amazon",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Amazon Air") when:30d",
});
