# Plugins

Below is a quick reference table of the modules and plugins that Nuxt Stack installs and configures:

| Module                                            | Description                                                 |
| :------------------------------------------------ | :---------------------------------------------------------- |
| [`@nuxtjs/axios`][nuxt-axios]                     | `axios` integration for making promise based HTTP requests  |
| [`@nuxtjs/dotenv`][nuxt-dotenv]                   | Loads `.env` and merges contents with Nuxt's `env` object   |
| [`@nuxtjs/pwa`][nuxt-pwa]                         | Collection of modules for developing PWAs                   |
| [`@nuxtjs/sitemap`][nuxt-sitemap]                 | Automatically generate or serve a dynamic sitemap           |
| [`@nuxtjs/style-resources`][nuxt-style-resources] | Share variables and mixins across style files and SFCs      |
| [`nuxt-svg-loader`][nuxt-svg-loader]              | Import SVGs as Vue components                               |
| [`webfontloader`][webfontloader]                  | Load custom webfonts from services like Google and Typekit  |
| [`vue-analytics`][vue-analytics]                  | Google Analytics integration for Nuxt                       |
| [`lazysizes`][lazysizes]                          | Lazily load images and videos when they become visible      |
| [`vue-pwa-installer`][vue-pwa-installer]          | Simple interface for installing a PWA to the home screen    |
| [`vue-lazy-hydration`][vue-lazy-hydration]        | Lazily hydrate Vue components using a variety of strategies |
| [`vue-tabbing`][vue-tabbing]                      | Reactive flag triggered by tabbed keyboard navigation       |
| [`vue-static-data`][vue-static-data]              | Declare static (non-reactive) data within Vue components    |

::: tip NOTE
Some plugins are only installed if module options are specified in the Nuxt config.

For example `@nuxtjs/axios`, `webfontloader` and `vue-analytics` are only installed if module options are not `undefined`. This keeps the client bundles as small as possible.

Other plugins like `vue-pwa-installer`, `lazysizes` etc. can be disabled by passing `false` to their module options.
:::

Check out the [configuration page](./configuration.html) for information on what options can be passed to these plugins.

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
