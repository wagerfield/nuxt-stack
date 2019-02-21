const { defaultNuxtConfigFile } = require("@nuxt/config")

module.exports = {
  "config-file": {
    alias: "c",
    type: "string",
    default: defaultNuxtConfigFile,
    description: "Path to Nuxt config file"
  },
  version: {
    alias: "v",
    type: "boolean",
    description: "Display Nuxt version"
  },
  help: {
    alias: "h",
    type: "boolean",
    description: "Display this message"
  }
}
