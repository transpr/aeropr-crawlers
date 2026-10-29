import { gnewsSource } from "./google-news.js";

// Dassault Aviation press pages blocked from datacenter IPs; gnews fallback.
export const dassault: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dassault",
  orgName: "Dassault Aviation",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:dassault-aviation.com) when:30d",
});
