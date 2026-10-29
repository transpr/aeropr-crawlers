import { gnewsSource } from "./google-news.js";

// Rex Airlines (Australia): gnews discovery fallback (world scheduled-carrier completion).
export const rex: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "rex",
  orgName: "Rex Airlines (Australia)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Rex Airlines" Australia) when:30d",
});
