# `nuxt lint`

Proxy to `eslint` with `--ext` preconfigured to `js,jsx,ts,tsx,vue`

Nuxt Stack's ESLint config extends from [standard][standard-config] with added support for Vue, Jest, Prettier and Nuxt path alias `import` resolution. Check out the source for Nuxt Stack's [ESLint config here][eslint-config].

Usage: `nuxt lint <pattern> [options]`

| Option          | Default | Description            |
| :-------------- | :------ | :--------------------- |
| `-v, --version` | `N/A`   | Display `nuxt` version |
| `-h, --help`    | `N/A`   | Display `help` dialog  |

### Recipes

Lint all code in the components directory:

```bash
nuxt lint src/components
```

Lint and automatically fix all code:

```bash
nuxt lint . --fix
```

[standard-config]: https://github.com/standard/standard
[eslint-config]: https://github.com/wagerfield/nuxt-stack/tree/master/packages/eslint-config
