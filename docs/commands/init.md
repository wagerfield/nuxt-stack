# `nuxt init`

Generates a project template. Use the default `fancy` template to see more features in action. Alternatively, use the `basic` template to generate just the configuration files and an empty `index.vue` page.

Usage: `nuxt init <dir> [options]`

| Option               | Default | Description                                             |
| :------------------- | :------ | :------------------------------------------------------ |
| `-s, --src-dir`      | `src`   | Source directory                                        |
| `-g, --generate-dir` | `dist`  | Generate directory                                      |
| `-b, --build-dir`    | `.nuxt` | Build directory                                         |
| `-o, --overwrite`    | `false` | Overwrite any existing template files or configs        |
| `-t, --template`     | `fancy` | Project template to use. Options are `basic` or `fancy` |
| `-e, --vscode`       | `false` | Output VSCode `settings.json` and `jsconfig.json`       |
| `-k, --no-hooks`     | `true`  | Inject scripts and hooks into `package.json`            |
| `-v, --version`      | `N/A`   | Display `nuxt` version                                  |
| `-h, --help`         | `N/A`   | Display `help` dialog                                   |

### Recipes

Generate the `basic` project template:

```bash
nuxt init --template basic
```

Generate the `fancy` project template with VSCode settings and jsconfig:

```bash
nuxt init --vscode
```

Generate the `fancy` project with the source folders (pages, styles etc.) at the root of the project:

```bash
nuxt init --src-dir
```
