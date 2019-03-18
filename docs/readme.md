---
home: true
heroImage: /banner.png
heroText: " "
actionText: Get started →
actionLink: /guide/
features:
  - title: "Measurably fast"
    details: "Want to get 100/100 on Google Lighthouse? Thought you might. Nuxt Stack lays the foundation needed to build a Performant Web App."
  - title: "PWA out of the box"
    details: "Streamlines the process of creating an installable, performant Progressive Web App using a suite of battle-tested tools, modules and techniques."
  - title: "Write tests, right away"
    details: "Nuxt Stack takes care of configuring Jest and Babel to work with Vue and Nuxt out of the box—freeing you to focus on writing tests not tooling."
  - title: "Zero config"
    details: "Install one module, run one command and you're away. Develop a production ready app in a fraction of the time."
  - title: "Command all the things"
    details: "Initialise, lint, format, test, analyse and serve a static app with a suite of new commands added to Nuxt's CLI."
  - title: "Make code great again"
    details: "Have ESLint and Prettier automatically keep your code in check so you can focus on some real problems."
footer: MIT Licensed | Copyright 2019 Matthew Wagerfield
---

### Dive right in :sunglasses:

```bash
# Make a new directory
mkdir example && cd example

# Install dependencies
yarn add nuxt nuxt-stack

# Initialise a new project
yarn nuxt init

# Start the dev server
yarn dev
```

### What just happened? I didn't know there was a `nuxt init` command? :thinking:

You're right. There isn't normally.

Nuxt Stack adds a number of commands alongside the ones you're familiar with. `nuxt init` is just one of them.

Check out the [commands](/commands/) section to see what else Nuxt Stack can do.

### What's so special about Nuxt Stack? :innocent:

Out of the box, the [default project template][fancy-example] will get [100/100 in a Google Lighthouse audit][google-lighthouse-report] _across the board_.

If that's piqued your interest, check out some of the other [features](/guide/features.html) Nuxt Stack has to offer.

### How much bloat does Nuxt Stack add? :sweat_smile:

Very little. It also depends on which plugins _you decide_ to use.

Nuxt Stack is simply a collection of plugins and presets focused on delivering the best performance possible.

Out of the box, the default project template will add [~15kb of JavaScript (gzipped)][fancy-stats] to a [bare bones Nuxt app][benchmark-stats]. This mainly comes from `lazysizes` **~7kb** and `webfontloader` **~5kb**.

If you don't want to lazy load images or use custom webfonts you can disable these plugins and shed the extra weight. Some plugins like `axios`, `webfontloader` and `vue-analytics` are only included when configuration options are present in the Nuxt config. For example, the [basic project template][basic-example] doesn't use any custom webfonts so `webfontloader` isn't included in the [vendor bundle][basic-stats].

All plugins that Nuxt Stack provides are fully configurable, so you can _opt-in_ or _out_ as necessary.

Check out the [configuration](/module/configuration.html) docs to learn more.

[google-lighthouse-report]: https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://fancy-example.nuxtstack.org
[benchmark-stats]: https://benchmark-stats.nuxtstack.org/client.html
[basic-example]: https://basic-example.nuxtstack.org
[basic-stats]: https://basic-stats.nuxtstack.org/client.html
[fancy-example]: https://fancy-example.nuxtstack.org
[fancy-stats]: https://fancy-stats.nuxtstack.org/client.html
