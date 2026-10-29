import { gnewsSource } from "./google-news.js";

// TUI Airlines Netherlands: gnews discovery fallback (European coverage, full country list).
export const tuiNl: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tui-nl",
  orgName: "TUI Airlines Netherlands",
  orgGroup: "TUI Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("TUI Airlines Netherlands" OR "TUI fly Netherlands") when:30d",
});
