# Stocket Packages

## Issue tracking

Before starting work on any issue, ensure it is added to the **[Stocket Improvements Tracker](https://github.com/orgs/stocketfr/projects/2)** GitHub Project. Move the issue to "In Progress" when starting and "Done" when complete.

## Gotchas

- **Barrel generation** only exports `.type.ts` and `.enum.ts` files — other file suffixes are ignored.
- **After adding/removing files** in `types/`, you must run barrels then build in order:
  ```bash
  pnpm --filter @stocket/types barrels
  pnpm --filter @stocket/types build
  ```
  Forgetting the barrels step means new exports won't be available to consumers.
- **Package releases use Changesets.** Add a changeset whenever a publishable package changes. Merges to `main` update a version PR; merging that PR publishes stable packages to GitHub Packages.
- **Cross-repository testing uses snapshots.** Package PRs from branches in this repository publish immutable versions under a `pr-<number>` tag. Consumer PRs pin the exact snapshot version until the stable release is available.
- **Registry authentication stays at the boundary.** GitHub Actions uses its short-lived `GITHUB_TOKEN`. Developers configure a personal `read:packages` token outside the repository; never commit one.
