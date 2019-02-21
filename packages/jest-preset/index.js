const { join, resolve } = require("path")
const { getNuxtSrcDir } = require("nuxt-stack-utils")

const r = (path) => resolve(__dirname, path)

module.exports = {
  globals: {
    "vue-jest": {
      babelConfig: r("babel.config.js")
    }
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "vue"],
  moduleNameMapper: {
    "^[~@]/(.*)$": join("<rootDir>", getNuxtSrcDir(), "$1")
  },
  snapshotSerializers: ["jest-serializer-vue"],
  transform: {
    "^.+\\.(vue)$": "vue-jest",
    "^.+\\.(jsx?)$": r("babel.transform.js"),
    "^.+\\.(css|less|sass|scss|styl|jpg|png|svg)$": "jest-transform-stub"
  }
}
