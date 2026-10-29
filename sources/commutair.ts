import { gnewsSource } from "./google-news.js";

// CommutAir: gnews discovery fallback (US carriers per Wikipedia category list).
export const commutair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "commutair",
  orgName: "CommutAir",
  orgGroup: "United Airlines",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("CommutAir") when:30d",
});
