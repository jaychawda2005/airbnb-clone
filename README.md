# Airbnb listing clone

Production-scale architecture: [docs/architecture.md](docs/architecture.md)

QA agent configuration: [.github/agents/marketplace-qa.agent.md](.github/agents/marketplace-qa.agent.md)

Architecture skill configuration: [.github/skills/marketplace-architecture/SKILL.md](.github/skills/marketplace-architecture/SKILL.md)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project notes

This is a static React/TypeScript reproduction of a vacation-rental listing page. Listing content is local and intentional static behavior is documented in `STATUS.md`.

## Original Vite notes

This project uses Vite with HMR and Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
