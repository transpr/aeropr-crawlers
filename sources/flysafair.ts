import { gnewsSource } from "./google-news.js";

// FlySafair: gnews discovery fallback (world scheduled-carrier completion).
export const flysafair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "flysafair",
  orgName: "FlySafair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("FlySafair") when:30d",
});
