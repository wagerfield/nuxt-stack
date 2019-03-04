# `nuxt stats`

Proxy to `nuxt build` passing the `--analyze --spa --no-generate` flags.

Generates a [Webpack Analyzer Report][fancy-stats] for the client bundles.

Usage: `nuxt stats <dir> [options]`

| Option          | Default   | Description            |
| :-------------- | :-------- | :--------------------- |
| `-H, --host`    | `0.0.0.0` | Server hostname        |
| `-p, --port`    | `5000`    | Server port number     |
| `-v, --version` | `N/A`     | Display `nuxt` version |
| `-h, --help`    | `N/A`     | Display `help` dialog  |

### Recipes

Generate a Webpack Analyzer Report for the client bundles:

```bash
nuxt stats
```

[fancy-stats]: https://fancy-stats.nuxtstack.org/client.html
