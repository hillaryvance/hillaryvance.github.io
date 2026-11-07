# Hillary Vance’s teaching portfolio

A React and TypeScript portfolio built with Parcel and Material UI. The existing six sections, personal content, and fiesta banner are retained.

## Local development

Use Node.js 22.14 or newer (CI uses Node 22).

```sh
npm ci
npm start
```

Open http://localhost:3000. Parcel bundles the entry at `src/index.html` and follows imported images, fonts, PDFs, and the PDF.js worker.

## Editing the portfolio

- `src/App.tsx` composes the page and specifies document assets. Section components live in `src/components/sections`; navigation, the banner, and section reveal behavior live in `src/components/layout`.
- Edit biography, skills, and navigation labels in `src/data/portfolio.ts`. Keep section IDs stable so saved links continue to work.
- Change shared colors, typography, and layout in `src/theme.ts`; global fonts, focus indicators, and motion rules live in `src/App.css`.
- Lesson presentation lives in `src/components/lesson-plan`. The Science Lesson intentionally retains the original duplicated narrative-writing material pending author-supplied science content. Shared activities are rendered once per lesson; changing them affects both lessons.
- Replace documents and images in `assets` and update their `new URL(..., import.meta.url)` references if filenames change. Fonts use relative CSS URLs so Parcel emits them with the build.

PDF previews load near the viewport. The installed PDF.js worker is bundled locally, and each document includes an ordinary link if preview loading fails. PDFs with unusual fonts or non-Latin character maps may require additional local PDF.js resources; verify replacement documents in a browser.

## Quality checks

```sh
npm run typecheck
npm run lint
npm run format:check
npm test
npm run build
# Run everything:
npm run check
```

`npm run format` formats source and configuration. `npm run test:watch` runs Vitest interactively. Tests use jsdom and mock PDF rendering; production preview checks must also verify real PDF rendering.

CI runs the complete check on pushes and pull requests. Before release, preview `dist` with a static server and check narrow mobile, tablet, and desktop widths; keyboard navigation and drawer closing; direct hash links; reduced motion; and both PDF previews, text selection, links, images, and fonts. Test with the site served under a path prefix as well as at `/`.

## Build and deploy

`npm run build` clears generated output and emits the static site to `dist` using relative asset URLs. Automatic dependency installation during builds is disabled so missing dependencies fail explicitly. To publish manually to the configured GitHub Pages repository:

```sh
npm run deploy
```

The production browser targets retain Chrome 100 as a compatibility floor. This keeps Parcel’s fallback asset loader in use; with only recent browser targets, the patched bundler emitted bare module references without an import map during production verification. Recheck a real production preview before changing this target. The explicit browser target also keeps the Node version requirement separate from client compilation.

This builds first, then publishes `dist` with `gh-pages`. Deployment requires repository write access and is never performed by CI. No backend, secrets, or environment variables are needed.
