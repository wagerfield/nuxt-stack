# `nuxt format`

Proxy to `prettier` or `prettier-eslint` when passing the `--lint` flag.

Nuxt Stack's Prettier config only overrides two settings:

- `arrowParens: "always"`
- `semi: false`

Check out the source for Nuxt Stack's [Prettier config here][prettier-config].

Usage: `nuxt format <pattern> [options]`

| Option          | Default | Description                                        |
| :-------------- | :------ | :------------------------------------------------- |
| `-l, --lint`    | `false` | Use `prettier-eslint` binary instead of `prettier` |
| `-v, --version` | `N/A`   | Display `nuxt` version                             |
| `-h, --help`    | `N/A`   | Display `help` dialog                              |

### Recipes

Format all `.js` and `.vue` files:

```bash
nuxt format **/*.{js,vue}
```

Format and overwrite all `.js` files in the components directory:

```bash
nuxt format src/components/**/*.js --write
```

Format and lint all `.scss` and `.vue` files in the source directory:

```bash
nuxt format src/**/*.{scss,vue} --lint
```

[prettier-config]: https://github.com/wagerfield/nuxt-stack/tree/master/packages/prettier-config
