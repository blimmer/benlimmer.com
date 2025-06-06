# Testing Overview

This project now includes automated tests written in TypeScript. Unit tests use Node's built in `node:test` module and
are executed via [`tsx`](https://github.com/esbuild-kit/tsx), which transpiles them at runtime.

- **Unit tests** live under `tests/` and verify individual utility functions such as `parseBlogPost` and
  `getLastModified`. These ensure that blog metadata parsing and remark plugin logic behave as expected.
- **End‑to‑end tests** are written with [Playwright](https://playwright.dev). The Playwright test runner starts the
  development server automatically and verifies that the site loads and displays core content.

Automated tests improve confidence in future changes and help prevent regressions.
