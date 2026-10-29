import { gnewsSource } from "./google-news.js";

// DHL Group newsroom behind bot-wall; gnews fallback (aviation CP filtered by categorizer).
export const dhl: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dhl",
  orgName: "DHL Group",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:dpdhl.com OR site:dhl.com OR site:dhlglobalforwarding.com) when:30d",
});
