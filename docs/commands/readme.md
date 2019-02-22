# Commands

Nuxt `2.4.0` introduced a new feature allowing [custom commands][nuxt-commands] to be added to Nuxt's CLI.

Alongside `nuxt build` and `nuxt generate`, you can now run `nuxt init` and `nuxt test` etc.

Below is a table of commands provided by Nuxt Stack:

| Command                   | Description                                                                         |
| :------------------------ | :---------------------------------------------------------------------------------- |
| [`init`](./init.html)     | Initialise a new Nuxt Stack project with an baseline set of files to get you stated |
| [`test`](./test.html)     | Test code with `jest` using Jest and Babel presets for handling Vue components      |
| [`lint`](./lint.html)     | Lint code with `eslint` using a preset config for handling Nuxt path aliases        |
| [`format`](./format.html) | Format code with `prettier` or `prettier-eslint` simply by passing `--lint`         |
| [`clean`](./clean.html)   | Delete generated files and directories `.nuxt`, `dist`, `coverage` etc.             |
| [`serve`](./serve.html)   | Serve a statically generated site created with `nuxt generate`                      |
| [`stats`](./stats.html)   | Create a Webpack Bundle Analyzer report showing client bundle build stats           |

::: tip
To view the usage dialog for any command add `--help` or `-h`. For example: `nuxt init -h`

The same information can also be found on the respective command page by clicking the command name in the table above or in the navigation sidebar.
:::

[nuxt-commands]: https://nuxtjs.org/guide/modules#module-package-commands
