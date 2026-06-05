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
- **Packages are workspace-only.** `types/`, `eslint-config/`, and `tsconfig/` are consumed through `workspace:*` links by app repos. Do not bump versions just for local package changes; there is no npm publish/tag workflow.
