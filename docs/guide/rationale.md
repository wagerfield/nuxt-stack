# Rationale

After developing numerous Nuxt applications, you will have doubtless fallen into the pattern of repeating yourself, referring back to previous projects and copy and pasting stuff.

How many times have you copied over ESLint, Prettier, Jest or Babel configs? What about ignore files for these tools? How many times have you installed `@nuxtjs/pwa`, `@nuxtjs/style-resources` or `webfontloader`? Quite a few I imagine.

Nuxt Stack attempts to address this by laying a foundation of commonly used plugins while setting up the development environment needed to easily lint and test your application.

The aim of Nuxt Stack is to inherit the developer experience of Nuxt while delivering a highly performant yet minimal app out of the box.

## Why Jest over AVA?

1. [Performance][jest-performance]
2. [Popularity][jest-popularity]
3. [Industry adoption][jest-adoption]

## Why SASS over Stylus?

Prettier doesn't currently support Stylus, so SASS was chosen as the default CSS preprocessor.

::: tip NOTE
Nuxt Stack isn't doing anything special with SASS. It simply lists `node-sass` and `sass-loader` as dependencies so they don't need to be installed alongside `nuxt-stack`. This keeps the project dependencies nice and lean from the outset.
:::

If you're happy to forgo formatting from Prettier, simply install your preferred CSS preprocessor and webpack loader as you normally would.

[jest-performance]: https://blog.kentcdodds.com/migrating-to-jest-881f75366e7e
[jest-popularity]: https://nodejs.libhunt.com/compare-jest-vs-ava-avajs
[jest-adoption]: https://stackshare.io/stackups/ava-vs-jest#stacks
