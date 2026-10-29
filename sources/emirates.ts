import { gnewsSource } from "./google-news.js";

// Emirates: media centre blocked from GitHub runners (404).
export const emirates: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "emirates",
  orgName: "Emirates",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:emirates.com OR site:media.emirates.com OR site:emirates.media) when:30d",
});
