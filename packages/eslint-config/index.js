const { isProd, getNuxtSrcDir } = require("nuxt-stack-utils")

module.exports = {
  root: true,
  extends: [
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:vue/recommended",
    "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    serviceworker: true,
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    workbox: false
  },
  settings: {
    "import/resolver": {
      nuxt: {
        nuxtSrcDir: getNuxtSrcDir()
      }
    }
  },
  rules: {
    "no-console": isProd() ? "error" : "off",
    "no-debugger": isProd() ? "error" : "off"
  }
}
