import { gnewsSource } from "./google-news.js";

// SkyNRG (SAF supplier) — no public RSS; gnews fallback.
export const skynrg: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "skynrg",
  orgName: "SkyNRG",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(site:skynrg.com) when:30d",
});
