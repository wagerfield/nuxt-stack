# Configuration

## Nuxt Stack Options

### `stack`

Specify common meta data used by other modules in one place:

```js {3-6}
export default {
  modules: ["nuxt-stack"],
  stack: {
    name: "Awesome Sauce",
    shortName: "Sausome"
  }
}
```

| Key               | Type       | Default                          |
| :---------------- | :--------- | :------------------------------- |
| `lang`            | `String`   | `"en"`                           |
| `host`            | `URL`      | `"https://nuxtstack.org/"`       |
| `name`            | `String`   | `"Nuxt Stack"`                   |
| `shortName`       | `String`   | `stack.name`                     |
| `description`     | `String`   | `"Stacks of goodness for Nuxt."` |
| `keywords`        | `String[]` | `["nuxt", "stack"]`              |
| `themeColor`      | `String`   | `"#4fc08d"`                      |
| `backgroundColor` | `String`   | `"#FFFFFF"`                      |

The mapping of these values can be seen below:

```bash
stack.lang            » head.htmlAttrs.lang, meta.lang
stack.host            » meta.ogHost, sitemap.hostname
stack.name            » manifest.name, manifest.short_name, meta.name
stack.description     » manifest.description, meta.description
stack.keywords        » head.meta
stack.themeColor      » manifest.theme_color
stack.backgroundColor » manifest.background_color
```

::: warning IMPORTANT
It is _highly recommended_ that you specify **host**, **name**, **description** and **keywords**. Otherwise your project will inherit the default values!
:::

In addition to these mapping options:

| Key            | Type      | Default | Description                                  |
| :------------- | :-------- | :------ | :------------------------------------------- |
| `preconnect`   | `URL[]`   | `null`  | Array of URLs to create preconnect links for |
| `normalizeCSS` | `Boolean` | `true`  | Whether or not to include `normalize.css`    |

### `styles`

Appended to Nuxt's `css` [options array][nuxt-css]. This was added for nothing more than semantics. You can choose to use `styles` in place of `css` if you would prefer to include SCSS or LESS files using a more general option key name :woman_shrugging:

```js {3-4}
export default {
  modules: ["nuxt-stack"],
  styles: ["styles/a.scss"],
  css: ["styles/b.css"]
}
// The config above would result in nuxt.options.css:
// ["normalize.css", "styles/b.css", "styles/a.scss"]
```

### `eslint`

By default `eslint-loader` is integrated with Webpack during development. ESLint will run against your code each time you save it and raise any linting errors in the terminal and browser console. It will also automatically fix linting errors where possible.

To disable `eslint-loader` simply pass `false` to the `eslint` module options:

```js {3}
export default {
  modules: ["nuxt-stack"],
  eslint: false
}
```

Configuration options for `eslint-loader` can be [found here][eslint-loader-options]

| Key           | Type       | Default     | Description                         |
| :------------ | :--------- | :---------- | :---------------------------------- |
| `emitWarning` | `Boolean`  | `true`      | Emit all linting errors as warnings |
| `cache`       | `Boolean`  | `true`      | Cache linting results               |
| `fix`         | `Boolean`  | `true`      | Automatically fix errors            |
| `formatter`   | `Function` | `codeframe` | Linting error formatter             |

```js {3-5}
export default {
  modules: ["nuxt-stack"],
  eslint: {
    fix: false // disable automatic fixing
  }
}
```

## PWA Module Options

`@nuxtjs/pwa` is installed by default. To prevent this module from being installed:

```js {3}
export default {
  modules: ["nuxt-stack"],
  pwa: false
}
```

Nuxt Stack configures some `@nuxtjs/pwa` module options using the `stack` options documented above. For example `stack.name` and `stack.description` are copied to `manifest.name`, `meta.name`, `manifest.description` and `meta.description` respectively. Specifying your app name, description, lang etc. in the `stack` module options follows DRY principles by keeping everything in one place.

If you want different values in your app `manifest` to those in `meta` data, you can override the `stack` options by specifying the values in the respective PWA module options. `stack` options have the lowest order of precedence so they can be overridden by more specific module options. For example, if you set both `stack.name` and `meta.name` then `meta.name` will be used.

Below is a quick reference table for the module options provided by Nuxt PWA:

| Key        | Type      | Description                                                                |
| :--------- | :-------- | :------------------------------------------------------------------------- |
| `pwa`      | `Boolean` | Set to `false` to prevent `@nuxtjs/pwa` from being installed               |
| `icon`     | `Object`  | See Nuxt PWA [icon docs](https://pwa.nuxtjs.org/modules/icon.html)         |
| `meta`     | `Object`  | See Nuxt PWA [meta docs](https://pwa.nuxtjs.org/modules/meta.html)         |
| `manifest` | `Object`  | See Nuxt PWA [manifest docs](https://pwa.nuxtjs.org/modules/manifest.html) |
| `workbox`  | `Object`  | See Nuxt PWA [workbox docs](https://pwa.nuxtjs.org/modules/workbox.html)   |

## Third Party Module Options

As documented on the [plugins page](./plugins.html), Nuxt Stack includes a suite of popular modules and plugins. Some of these are installed by default while others are only included when module options are specified in the Nuxt config.

Below is a quick reference table of all the third party plugins that are included with Nuxt Stack. To configure or disable any of them, use the key specified.

| Key                                      | Description                                                       |
| :--------------------------------------- | :---------------------------------------------------------------- |
| [`analytics`][vue-analytics]             | Google Analytics integration for Nuxt                             |
| [`axios`][nuxt-axios]                    | Nuxt `axios` integration for making promise based HTTP requests   |
| [`dotenv`][nuxt-dotenv]                  | Loads `.env` and merges the contents with Nuxt's `env` object     |
| [`hydration`][vue-lazy-hydration]        | Lazily hydrate Vue components using a variety of strategies       |
| [`installer`][vue-pwa-installer]         | Simple interface for installing a PWA to the home screen          |
| [`lazysizes`][lazysizes]                 | Lazily load images and videos when they become visible            |
| [`sitemap`][nuxt-sitemap]                | Automatically generate or serve a dynamic sitemap                 |
| [`styleResources`][nuxt-style-resources] | Share variables, mixins and functions across style files and SFCs |
| [`staticData`][vue-static-data]          | Declare static (non-reactive) data within Vue components          |
| [`svgLoader`][nuxt-svg-loader]           | Import SVGs as Vue components                                     |
| [`tabbing`][vue-tabbing]                 | Reactive flag triggered by keyboard navigation using the tab key  |
| [`webfonts`][webfontloader]              | Load custom webfonts from services like Google and Typekit        |

[eslint-loader-options]: https://github.com/webpack-contrib/eslint-loader#options
[nuxt-css]: https://nuxtjs.org/api/configuration-css
[nuxt-axios]: https://axios.nuxtjs.org
[nuxt-dotenv]: https://www.npmjs.com/package/@nuxtjs/dotenv
[nuxt-pwa]: https://pwa.nuxtjs.org
[nuxt-sitemap]: https://www.npmjs.com/package/@nuxtjs/sitemap
[nuxt-style-resources]: https://www.npmjs.com/package/@nuxtjs/style-resources
[nuxt-svg-loader]: https://www.npmjs.com/package/nuxt-svg-loader
[webfontloader]: https://www.npmjs.com/package/webfontloader
[vue-analytics]: https://www.npmjs.com/package/vue-analytics
[lazysizes]: https://www.npmjs.com/package/lazysizes
[vue-pwa-installer]: https://www.npmjs.com/package/vue-pwa-installer
[vue-lazy-hydration]: https://www.npmjs.com/package/vue-lazy-hydration
[vue-tabbing]: https://www.npmjs.com/package/vue-tabbing
[vue-static-data]: https://www.npmjs.com/package/vue-static-data
