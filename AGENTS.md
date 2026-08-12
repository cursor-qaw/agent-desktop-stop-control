# AGENTS.md

## Cursor Cloud specific instructions

This is a single-service Create React App (`todo-application`) — a client-side React to-do app. There is no backend or database.

Dependencies are installed by the environment update script (`npm install`); you do not need to reinstall them at session start.

Standard commands (defined in `package.json` scripts):

- Run/dev: `npm start` (CRA dev server on port 3000). In this headless VM, run it as `BROWSER=none npm start` so it does not try to launch a browser. ESLint runs automatically in the dev server and build output.
- Test: `npm test` runs in interactive watch mode by default. Use `CI=true npm test` for a single non-interactive run.
- Build: `npm run build` (production bundle to `build/`, which is gitignored). CRA fails the build on ESLint errors, so a successful build also confirms lint passes.

Non-obvious notes:

- `src/special-number.js` contains an invalid legacy-octal numeric literal, but it is not imported anywhere, so it is excluded from the webpack build and does not break `npm start`, `npm test`, or `npm run build`. Do not assume the build is broken because of it.
