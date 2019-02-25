# Commands

Nuxt `2.4.0` introduced a new feature allowing [custom commands][nuxt-commands] to be added to Nuxt's CLI.

Alongside `nuxt build` and `nuxt generate`, you can now run `nuxt init` and `nuxt test` among others listed below:

| Command                   | Description                                                                 |
| :------------------------ | :-------------------------------------------------------------------------- |
| [`init`](./init.html)     | Initialise a new Nuxt Stack project to get you started                      |
| [`test`](./test.html)     | Test code with Jest using presets for handling Vue components               |
| [`lint`](./lint.html)     | Lint code with ESLint using a preset config for resolving Nuxt path aliases |
| [`format`](./format.html) | Format code with Prettier and optionally ESLint by passing `--lint`         |
| [`clean`](./clean.html)   | Delete generated files and directories                                      |
| [`serve`](./serve.html)   | Serve a statically generated site created with `nuxt generate`              |
| [`stats`](./stats.html)   | Generate a Webpack Bundle Analyzer report showing client bundle build stats |

::: tip
To view the usage dialog for any command add `--help` or `-h`. For example: `nuxt init -h` or `nuxt test --help`

The same information can also be found on the respective command page by clicking the command name in the table above or in the navigation sidebar.
:::

[nuxt-commands]: https://nuxtjs.org/guide/modules#module-package-commands
