# Rationale

After developing a handful of Nuxt applications, you have probably found yourself referring back to previous projects to copy and paste stuff across. You've also probably installed and configured the same modules more than once.

How many times have you copied across ESLint, Prettier, Jest or Babel configs? What about ignore files for these tools? Globbing patterns to lint and test your code? Configuring Husky and Lint Staged to put these tools to work before you commit your code?

How many times have you installed `@nuxtjs/axios`, `@nuxtjs/pwa` or `webfontloader`?

If the answer to these questions is "quite a few" then Nuxt Stack _might_ be your new best friend.

## Why nuxt-stack over create-nuxt-app?

`create-nuxt-app` addresses many of these problems by providing a CLI for generating project templates with all the files, dependencies and configuration you need to get going. This saves a lot of time, but it veers away from the minimal design that makes `nuxt` so awesome.

There's something deeply satisfying about starting a new Nuxt project from scratch with nothing but `nuxt` as a dependency and a pages directory with a single `index.vue` file in it. There's so much going on behind the scenes when you run `nuxt` from the command line—but you barely need think about it. Nuxt takes care of wiring up Webpack, Babel and Vue for development _and_ production with routing, SSR and static site generation thrown in the mix. The DX (developer experience) is _fantastic_.

However, as soon as you start integrating and configuring tools like ESLint, Prettier and Jest...or commonly used modules like `@nuxtjs/axios` and `@nuxtjs/pwa` Nuxt's zen starts to fade.

Nuxt Stack attempts to remedy this by assembling a suite of [commonly used plugins](/module/plugins.html) and setting up the development tools needed to lint, format and test your application.

But rather than flooding the project with files and dependencies, Nuxt Stack takes a leaf out of Nuxt's book and tries to hide away as much configuration as possible. Some config files are still required in order for your IDE to give you linting and formatting hints, but these configs are _very_ minimal since they inherit from Nuxt Stack presets:

```js
// .eslintrc.js
module.exports = {
  extends: ["nuxt-stack"]
}
```

```js
// .prettierrc.js
module.exports = require("prettier-config-nuxt-stack")
```

The aspiration of Nuxt Stack is to try and match the developer experience of Nuxt while delivering a highly performant yet minimal PWA out of the box.

Much like Nuxt, every aspect of Nuxt Stack can be configured, turned on or off as required. If you don't like parts of the ESLint or Prettier config you can overwrite them. If you don't need some of the plugins you can disable them. The baseline configuration of Nuxt Stack is the result of developing numerous Nuxt applications and identifying the commonalities between them.

Finally, Nuxt Stack adds a number of commands to Nuxt's CLI for performing common tasks such as linting, formatting and testing. Alongside `nuxt build` and `nuxt generate` you can do things like `nuxt lint`, `nuxt format` and `nuxt test`. These commands simply proxy to ESLint, Prettier and Jest respectively, but are preconfigured to work with the Nuxt app project structure, resolve path aliases and support Vue Single File Components.

## Why SASS over Stylus?

Prettier doesn't currently support Stylus, so SASS was chosen as the default CSS preprocessor.

What about LESS? Though Prettier does support LESS, [SASS is the more popular of the two][sass-vs-less].

::: tip NOTE
Nuxt Stack isn't doing anything special with SASS. It simply lists `node-sass` and `sass-loader` as dependencies so they don't need to be installed alongside `nuxt-stack`. This keeps the project dependencies nice and lean from the outset.
:::

If you're happy to forgo formatting from Prettier or would prefer to use LESS, simply install the CSS preprocessor and Webpack loader as you normally would.

## Why Jest over AVA?

1. [Performance][jest-performance]
2. [Popularity][jest-popularity]
3. [Industry adoption][jest-adoption]

[sass-vs-less]: https://trends.google.com/trends/explore?date=all&q=%2Fm%2F054k6n_,%2Fm%2F0gjd0jv
[jest-performance]: https://blog.kentcdodds.com/migrating-to-jest-881f75366e7e
[jest-popularity]: https://nodejs.libhunt.com/compare-jest-vs-ava-avajs
[jest-adoption]: https://stackshare.io/stackups/ava-vs-jest#stacks
