import { gnewsSource } from "./google-news.js";

// VietJet Air: gnews discovery fallback (world scheduled-carrier completion).
export const vietjet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "vietjet",
  orgName: "VietJet Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("VietJet") when:30d",
});
