const options = {
  targets: {
    node: "current"
  }
}

module.exports = {
  presets: [["@babel/env", options], ["@nuxt/app", options]]
}
