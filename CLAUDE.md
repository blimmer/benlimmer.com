# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `yarn dev` (runs on http://localhost:4321)
- **Build for production**: `yarn build`
- **Preview production build**: `yarn preview`
- **Run linting**: `yarn lint`
- **Run end-to-end tests**: `yarn test:e2e` (uses Playwright)
- **Run single test file**: `yarn test:e2e tests/filename.test.ts`
- **Run tests in headed mode**: `yarn test:e2e --headed`
- **Install dependencies**: `yarn install`

## Architecture Overview

This is Ben Limmer's personal website built with **Astro 5** using:

- **Static site generation** with TypeScript
- **TailwindCSS 4** for styling
- **MDX** for content (blog posts and portfolio)
- **Playwright** for end-to-end testing
- **Yarn 4** as package manager

### Content Architecture

The site uses Astro's content collections with two main types:

- **Blog posts**: Located in `src/content/blog/` with frontmatter schema including title, description, optional tldr,
  tags, and archive status
- **Portfolio items**: Located in `src/content/portfolio/` with similar schema

Content can be either:

- Single `.mdx` files (e.g., `post-name.mdx`)
- Directories with `index.mdx` and `assets/` folder for images

### Key Directories

- `src/components/`: Reusable Astro components organized by purpose
  - `homepage/`: Homepage-specific sections
  - `freelance/`: Freelance page components
  - `ui/`: Generic UI components
- `src/layouts/`: Page layout templates
- `src/pages/`: File-based routing structure
- `src/content/`: Content collections (blog, portfolio)
- `tests/`: Playwright e2e tests
- `public/`: Static assets

### Important Technical Details

- Uses custom remark plugin (`remarkLastModifiedTime`) for automatic last modified timestamps
- Implements sitemap filtering to exclude archived blog posts
- Case-insensitive blog post slug matching for cross-platform compatibility
- Configured for static output targeting https://benlimmer.com

### Testing Setup

Playwright configuration:

- Tests run against `yarn astro preview` server on localhost:4321
- Supports multiple browsers (Chrome, Firefox, Safari) and mobile viewports
- Uses GitHub reporter in CI, HTML reporter locally
- Automatically starts/stops preview server for tests
