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

IMPORTANT: Always use `yarn` instead of `npm` or `npx` if you're running scripts or NPM packages.

## Architecture Overview

This is Ben Limmer's personal website built with **Astro 5** using:

- **Static site generation** with TypeScript
- **TailwindCSS 4** for styling
- **MDX** for content (blog posts and portfolio)
- **Playwright** for end-to-end testing
- **Yarn 4** as package manager

The end result is a static website deployed via an S3 + CloudFront setup. Builds and deployments automatically run in
GitHub Actions.

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

### Testing Setup

End-to-end tests are run using Playwright.

- Tests run against `yarn astro preview` server on localhost:4321
- Supports multiple browsers (Chrome, Firefox, Safari) and mobile viewports
- Uses GitHub reporter in CI, HTML reporter locally
- Automatically starts/stops preview server for tests

## Development Guidelines

### General Coding Style

- If you add comments when generating code, they should describe purpose, not effect
- Prioritize modularity, DRY principles, and performance

### Astro Development Guidelines

- Enforce strict TypeScript settings, ensuring type safety across the project
- Use TailwindCSS for all styling, keeping the utility-first approach in mind
- Ensure Astro components are modular, reusable, and maintain a clear separation of concerns
- When suggesting an import, use the TypeScript `src` path from `tsconfig.json`, instead of relative imports
- Aim for optimal performance. Keep runtime Javascript logic minimal, preferring generation at build time
- Refer to Astro's official documentation via the Astro MCP server for detailed information on components, routing, and
  integrations for best practices
- Prioritize responsive design, with a mobile-first design approach
- Use Astro's Image component for optimized image delivery, instead of using `<img>` tags

### TailwindCSS Styling Guidelines

- The tailwind global config is located in `src/styles/global.css`. Prefer global style/classes for consistency when
  possible. Only customize when necessary
- Use Tailwind utility classes extensively in your Astro components
- Leverage Tailwind's responsive design utilities (sm:, md:, lg:, etc.)
- Utilize Tailwind's color palette and spacing scale for consistency
- The entire site is "dark mode". Do not use the `dark` class.

### Accessibility

- Ensure proper semantic HTML structure in Astro components
- Implement ARIA attributes where necessary
- Ensure keyboard navigation support for interactive elements

### Design Guidelines

- The website is for a software engineer
- The website should appear modern and polished
- Prefer clean, minimal design
- When suggesting colors, ensure they satisfy WCAG AA contrast requirements

#### Testing Designs

- When dealing with design, utilize the puppeteer MCP server to view your changes on localhost:4321
- If the site is not available on localhost:4321, run `yarn dev` to start the dev server. Do not start the server if
  localhost:4321 is already responding
- Ensure that the design looks correct on all the TailwindCSS breakpoints:
  - sm: 40rem (640px)
  - md: 48rem (768px)
  - lg: 64rem (1024px)
  - xl: 80rem (1280px)
  - 2xl: 96rem (1536px)

## Special Pages

### Business Card Page (`src/pages/businessCard.astro`)

This page is used to render the design for a physical business card.

#### Printer Information

Uses Moo.com as the printer. Design guidelines:

- **Bleed Area**: 3.66" x 2.16" - Make sure your background extends to fill the bleed area (to avoid nasty white edges!)
- **Trim**: 3.50" x 2.0" - This is where we aim to cut your cards
- **Safe Area**: 3.34" x 1.84" - Make sure important aspects of your design (like text and logos) are inside the safe
  area (to avoid the chop!)

Text requirements:

- Keep all text at 8pt or higher
- Sharp lines need to be at 0.5pt or thicker

#### Screen Capture Process

Use high-quality screen capture from Google Chrome dev tools to produce the image for upload to the printer. Don't
design within exact pixel dimensions above. Instead, use the equivalent aspect ratio to allow the design to scale up
within the proportions defined.

#### Design Guidelines

The card should be inspired by the design of the rest of the site. However, make choices that will look good in print,
even if it means it's slightly different than the site design.
