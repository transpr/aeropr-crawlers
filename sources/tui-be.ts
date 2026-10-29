import { gnewsSource } from "./google-news.js";

// TUI Airlines Belgium: gnews discovery fallback (European coverage, full country list).
export const tuiBe: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tui-be",
  orgName: "TUI Airlines Belgium",
  orgGroup: "TUI Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("TUI Airlines Belgium" OR "TUI fly Belgium") when:30d",
});
