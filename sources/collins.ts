import { gnewsSource } from "./google-news.js";

// Collins Aerospace press pages blocked; gnews fallback.
export const collins: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "collins",
  orgName: "Collins Aerospace",
  orgGroup: "RTX",
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:collinsaerospace.com OR site:rtx.com) when:30d",
});
