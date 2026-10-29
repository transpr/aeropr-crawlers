import { gnewsSource } from "./google-news.js";

// Kalitta Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const kalitta: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "kalitta",
  orgName: "Kalitta Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Kalitta Air") when:30d",
});
