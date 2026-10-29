import { gnewsSource } from "./google-news.js";

// Safran press pages blocked from datacenter IPs; gnews fallback.
export const safran: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "safran",
  orgName: "Safran",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:safran-group.com OR site:safran.tech OR site:safran-aircraft-engines.com) when:30d",
});
