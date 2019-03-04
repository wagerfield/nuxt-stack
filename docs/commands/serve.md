# `nuxt serve`

Proxy to `serve` passing the `generate.dir` directory inferred from the Nuxt config.

Usage: `nuxt serve <dir> [options]`

| Option          | Default   | Description                   |
| :-------------- | :-------- | :---------------------------- |
| `-b, --banner`  | `false`   | Show the fancy `serve` banner |
| `-H, --host`    | `0.0.0.0` | Server hostname               |
| `-p, --port`    | `5000`    | Server port number            |
| `-v, --version` | `N/A`     | Display `nuxt` version        |
| `-h, --help`    | `N/A`     | Display `help` dialog         |

### Recipes

Serve the generated static site directory:

```bash
nuxt serve
```

Serve the generated static site directory and show the fancy banner:

```bash
nuxt serve --banner
```

Serve the generated static site on localhost port 8000:

```bash
nuxt serve --host localhost --port 8000
```
