const { resolve } = require("path")
const { createTransformer } = require("babel-jest")

module.exports = createTransformer({
  configFile: resolve(__dirname, "babel.config.js"),
  babelrc: false
})
