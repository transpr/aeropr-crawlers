// One-off cleanup: remove rows collected with broken extractors before the
// parseDetail / body guards existed (e.g. airBaltic JS-shell pages stored with
// generic "Newsroom"-style titles and empty bodies). The next direct crawl
// repopulates them with the fixed code.
// Run manually: npx tsx src/cleanup.ts   (or via the "Cleanup junk releases" workflow_dispatch)
import { deleteReleases } from "./db.js";

async function main() {
  const n1 = await deleteReleases("source_slug=eq.airbaltic");
  const n2 = await deleteReleases(
    'title=in.("Newsroom","News","Media","Press%20releases","Press%20Releases","Latest","Home","Press","Announcements")',
  );
  console.log(`Deleted ${n1} airBaltic row(s) and ${n2} generic-title row(s).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
