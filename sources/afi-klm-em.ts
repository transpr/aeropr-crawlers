import { gnewsSource } from "./google-news.js";

// AFI KLM E&M: gnews discovery fallback (newsroom not directly crawlable from runners).
export const afiKlmEm: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "afi-klm-em",
  orgName: "AFI KLM E&M",
  orgGroup: "Air France-KLM",
  alliance: null,
  type: "mro",
  sector: "air",
  language: "en",
  query: "(site:afiklmem.com) when:30d",
});
