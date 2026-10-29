import { gnewsSource } from "./google-news.js";

// STARLUX Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const starlux: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "starlux",
  orgName: "STARLUX Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("STARLUX Airlines") when:30d",
});
