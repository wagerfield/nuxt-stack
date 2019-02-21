#!/usr/bin/env node

const spawn = require("cross-spawn")
const { NuxtCommand } = require("@nuxt/cli")
const { setNuxtSrcDir } = require("nuxt-stack-utils")
const { common } = require("../options")

const ext = ["js", "jsx", "ts", "tsx", "vue"].join(",")

NuxtCommand.run({
  name: "lint",
  description: "Lint code with ESLint",
  usage: "lint <pattern>",
  options: {
    ...common
  },
  async run(cmd) {
    setNuxtSrcDir(await cmd.getNuxtConfig())
    const args = ["--ext", ext].concat(cmd._argv)
    spawn("eslint", args, { stdio: "inherit" })
  }
})
