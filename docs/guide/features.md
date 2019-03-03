# Features

Nuxt Stack is composed of two parts:

- Suite of [commands](/commands/) added to Nuxt's CLI for testing, linting, formatting etc.
- Nuxt [module](/module/) that installs and configures a collection of plugins

The features below have been partitioned and organised accordingly.

## Module

- ESLint integration with Webpack for linting and fixing your code automatically during development

## Commands

- Generate project templates with `nuxt init`
  - Pick from two templates: "basic" or "fancy"
  - Only essential files and configuration are generated
  - Options for specifying the source, build and statically generated site folders
  - Score 100/100 in a Google Lighthouse audit from the start
  - Inject useful development `scripts` and hooks for `husky` and `lint-staged`
  - Generate VSCode settings for resolving Nuxt path aliases and formatting code on save
- Write and run tests for Jest with zero configuration using `nuxt test`
  - Import Vue Single File Components (SFCs) into test files
  - Leverage `@vue/test-utils` suite of utilities for asserting your components
  - Use Jest's snapshot functions to render your Vue SFCs to formatted strings
  - Nuxt path aliases are automatically resolved
  - Only run _related_ tests when committing files to version control
- Lint your source files using `nuxt lint`
  - Configures ESLint file extensions to match `js,jsx,ts,tsx,vue`
- Format your code with Prettier using `nuxt format`
  - Optionally format and then lint with `nuxt format --lint`
- Delete all generated files and folders with `nuxt clean`
  - Removes `.nuxt`, `dist` and `coverage` folders
  - Optionally delete `node_modules` and lock files
- Serve statically generated sites with `nuxt serve`
  - Uses `serve` under the hood but infers the folder to serve from `nuxt.config.js`
- Generate a Webpack Bundle Analyser report with `nuxt stats`
