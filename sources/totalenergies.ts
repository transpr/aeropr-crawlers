import { gnewsSource } from "./google-news.js";

// TotalEnergies newsroom blocked from datacenter IPs; gnews fallback (aviation-related CP will be filtered by categorizer).
export const totalenergies: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "totalenergies",
  orgName: "TotalEnergies",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(site:totalenergies.com) when:30d",
});
