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
- **Package releases** are version-bump driven. If you change `types/`, `eslint-config/`, or `tsconfig/`, bump that package's `package.json` version in the same PR. After the PR merges to `main`, the `tag.yml` workflow runs on GitHub-hosted Actions, publishes any bumped packages to npm via trusted publishing, and then creates the matching git tags.
- The generated tags use these formats:
  ```bash
  types@x.y.z
  eslint-config@x.y.z
  tsconfig@x.y.z
  ```
