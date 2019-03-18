# `nuxt test`

Proxy to `jest` with `--preset` preconfigured to `jest-preset-nuxt-stack`

Nuxt Stack's Jest preset takes care of setting up Jest to work with Vue Single File Components and Nuxt's path aliases. It also lists `@vue/test-utils` as a dependency so you can import and assert Vue SFCs from the get go. Check out the source for Nuxt Stack's [Jest preset here][jest-preset].

Usage: `nuxt test <pattern> [options]`

| Option          | Default | Description                                |
| :-------------- | :------ | :----------------------------------------- |
| `-r, --related` | `false` | Alias for Jest's `--findRelatedTests` flag |
| `-v, --version` | `N/A`   | Display `nuxt` version                     |
| `-h, --help`    | `N/A`   | Display `help` dialog                      |

### Recipes

Run all tests in the components directory in watch mode:

```bash
nuxt test src/components --watch
```

Run all related tests for a given globbing pattern. Useful when using `lint-staged` to only run tests related to the files being committed. Note that `lint-staged` will pass all the file paths to this command, so you can omit `<pattern>` in this case:

```bash
nuxt test <pattern> --related
```

[jest-preset]: https://github.com/wagerfield/nuxt-stack/tree/master/packages/jest-preset
