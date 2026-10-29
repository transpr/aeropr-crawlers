import { gnewsSource } from "./google-news.js";

// Rolls-Royce media site blocked from datacenter IPs; gnews fallback.
export const rolls-royce: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "rolls-royce",
  orgName: "Rolls-Royce",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:rolls-royce.com OR site:rolls-royce.aero) when:30d",
});
