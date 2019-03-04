# `nuxt clean`

Proxy to `rimraf` passing the `buildDir` and `generate.dir` directories inferred from the Nuxt config. This command also deletes the `coverage` directory at the root of the project if found.

Usage: `nuxt clean <dir> [options]`

| Option          | Default | Description                                      |
| :-------------- | :------ | :----------------------------------------------- |
| `-l, --lock`    | `false` | Delete `package-lock.json` and `yarn.lock` files |
| `-m, --modules` | `false` | Delete the `node_modules` directory              |
| `-v, --version` | `N/A`   | Display `nuxt` version                           |
| `-h, --help`    | `N/A`   | Display `help` dialog                            |

### Recipes

Delete all generated files and folders:

```bash
nuxt clean
```

Delete all generated files, folders and lock files:

```bash
nuxt clean --lock
```
