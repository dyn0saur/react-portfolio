# Repository Guidelines

## Project Structure & Module Organization
This portfolio is built on Create React App with the entry point at `src/index.js` mounting `App`. Keep reusable UI in `src/components/`, route-level views in `src/pages/`, and the shared `Template` for project details under `src/projects/`. Add or edit projects by updating the structured blocks in `src/data/projects.js`; each block supports `paragraph`, `image`, `list`, or `heading` types so new pages rarely need bespoke React. Shared data and configuration live in `src/data/`, while static images and icons belong in `src/assets/`; use `public/` only for globally served files such as `favicon.ico` or the existing `CNAME`.

## Build, Test, and Development Commands
- `npm start`: Runs the development server at `http://localhost:3000` with fast refresh; rely on this for iterative UI work.
- `npm run build`: Produces the production bundle in `build/`; ensure this succeeds before merging features.
- `npm test`: Launches Jest in watch mode via `react-scripts`; press `a` to rerun all suites or `q` to exit when done.

## Coding Style & Naming Conventions
Follow the prevailing 2-space indentation, double-quoted strings, and trailing semicolons. React components, page modules, and files exporting JSX should use PascalCase (for example `LightboxImage.jsx`), while helper functions inside modules stay camelCase. Maintain CSS in the existing `.css` companions (e.g., `projects.css`) and co-locate any new stylesheet with its component unless it is shared broadly. Rely on the built-in ESLint configuration bundled with `react-scripts`; run `npm start` or `npm test` to surface lint errors immediately.

## Testing Guidelines
Jest with React Testing Library is already configured, as illustrated by `src/Router.test.jsx`. Name new test files `ComponentName.test.jsx` and place them beside the code they exercise. Prefer interaction-focused tests that mimic user flows, and keep coverage current for navigation, routing, and error boundaries. For CI parity, run `npm test -- --watchAll=false` before opening a pull request.

## Commit & Pull Request Guidelines
Follow the existing imperative commit style (`Add feature`, `Fix bug`) and keep summaries under ~60 characters when possible. Reference related issues with `Fixes #123` in the body, and group multiple changes into logical commits. Pull requests should describe user-facing impacts, include before/after screenshots for visual updates, and mention any new commands or environment variables.

## Deployment Notes
The `homepage` field and `CNAME` indicate GitHub Pages hosting. After each release branch is merged, run `npm run build` and verify the bundle locally or with a staging deploy before pushing to `gh-pages`.
