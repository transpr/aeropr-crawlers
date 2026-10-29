import { gnewsSource } from "./google-news.js";

// Neste newsroom blocked; gnews fallback (SAF-relevant CP filtered by categorizer).
export const neste: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "neste",
  orgName: "Neste",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(site:neste.com) when:30d",
});
