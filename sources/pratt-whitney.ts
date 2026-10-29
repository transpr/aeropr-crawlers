import { gnewsSource } from "./google-news.js";

// P&W distributes via PR Newswire; newsroom.prattwhitney.com signup possible.
export const pratt-whitney: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "pratt-whitney",
  orgName: "Pratt & Whitney",
  orgGroup: "RTX",
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:prattwhitney.com OR site:newsroom.prattwhitney.com OR site:rtx.com) when:30d",
});
