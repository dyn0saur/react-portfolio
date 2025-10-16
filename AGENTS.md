# Repository Guidelines

## Project Structure & Module Organization
The app lives in `src/`, with routing in `src/Router.jsx`, shared components under `src/components/`, and project content split across `src/data/` (JSON-like modules) and `src/projects/` (layout wrappers). Page-level entries sit in `src/pages/`. Static assets are in `public/` (served at `/images/...`) and author-managed design tokens or local assets go in `src/assets/`. Jest tests reside beside source, e.g., `src/Router.test.jsx`. Use this layout when adding new modules so imports remain predictable.

## Build, Test, and Development Commands
- `npm start`: Runs the local dev server with hot reload. Defaults to `http://localhost:3000`.
- `npm test`: Launches the Jest watcher used by `react-scripts`; press `a` to run all tests.
- `npm run build`: Produces a production bundle in `build/`.
- `npm run generate:thumbs`: Executes `scripts/generate-thumbnails.js` to create `.thumb` images for the lightbox. Run after adding large assets to keep previews fast.

## Coding Style & Naming Conventions
Follow the project’s React + JSX conventions: functional components, hooks, and descriptive prop names. Prefer PascalCase for components (`ProjectPage`), camelCase for utilities (`renderBlock`), and kebab-case for filenames except React components (`ProjectPage.jsx`). Keep indentation at two spaces; avoid trailing semicolons to match existing files. Inline comments should clarify intent, not restate code. CSS lives in `src/App.css` and `src/projects.css`; reuse custom properties (`var(--accent)`) when extending styles.

## Testing Guidelines
The project uses Jest via `react-scripts test`. place new tests next to the module (`Component.test.jsx`) mirroring its name. Focus on rendering behavior and regression coverage for routing, data hydration, and lightbox behavior. CI expects tests to pass locally before pushing; add targeted tests when changing rendering logic or data shape.

## Commit & Pull Request Guidelines
Commit messages in history are short and imperative (e.g., `fix small size images`, `add new project, ETC`). Follow that style and scope commits narrowly. For pull requests, include: summary of changes, manual or automated test results (`npm test`), any asset-generation notes (`npm run generate:thumbs`), and screenshots for visual tweaks. Link relevant issues or TODO references when available; keep branches current with `main` before submitting.

## Assets & Media Handling
Place high-resolution images under `public/images/` and store thumbnails alongside them. Update `src/data/projects.js` using the new `imageRow` block when grouping visuals; supply absolute paths (`/images/...`) so `PUBLIC_URL` resolution stays consistent. Remove unused assets to keep the repo lean.

### Image Row & Single Image Layout Notes
- Standalone project images are centered automatically; only set explicit margins when overriding the default `margin: 16px auto`.
- `imageRow` blocks auto-scale images to share a common height, keeping vertical shots capped at `0.715 × window height` while preserving aspect ratios. Avoid hard-coding widths/heights in project data; use optional `style` props sparingly.
- Rows should include the minimum images needed; the layout will center them and add mobile gutters automatically.

## Navigation & Routing Snapshot
- Landing page (`#/` or empty hash) now renders a three-line intro stack inside `landing-copy`, followed by links labeled `Expertise`, `Works`, and external `Resume`.
- Core page (`#/core`) centers the capabilities panel and mirrors the footer links: `Intro`, `Works`, `Resume`.
- Projects index (`#/projects`) paginates five projects per page, appends `?page=N` for pagination, and surfaces footer links `Intro`, `Expertise`, `Resume`.
- Project detail remains routed via `#/projects/:slug`. Hash parsing lives in `src/Router.jsx`.
