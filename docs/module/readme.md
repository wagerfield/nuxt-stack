# Module

```js
// nuxt.config.js
export default {
  modules: ["nuxt-stack"]
}
```

The `nuxt-stack` module does a number of things:

1. [Overrides](#nuxt-overrides) some of Nuxt's default options
2. Installs and configures a suite of [plugins](./plugins.html)
3. Integrates `eslint-loader` with Webpack

## Nuxt Overrides

Nuxt Stack sets the following options by default:

```js
// nuxt.config.js
export default {
  hardSource: true,
  generate: {
    fallback: true, // 200.html -> 404.html
    subFolders: false // about/index.html -> about.html
  },
  messages: {
    back_to_home: "Return to home page",
    error_404: "Page not found"
  },
  router: {
    linkActiveClass: "link-active",
    linkExactActiveClass: "link-active-exact"
  },
  server: {
    host: "0.0.0.0", // Access across the network
    port: 5000 // Default port used by serve
  }
}
```

Check out the [overview of plugins](./plugins.html) that are installed and configured by Nuxt Stack. Or head over to the [configuration page](./configuration.html) for information on what options can be passed to these plugins.
