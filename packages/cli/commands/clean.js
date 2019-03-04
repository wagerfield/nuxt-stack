#!/usr/bin/env node

const spawn = require("cross-spawn")
const { NuxtCommand } = require("@nuxt/cli")
const { common } = require("../options")

NuxtCommand.run({
  name: "clean",
  description: "Delete generated files",
  usage: "clean <dir>",
  options: {
    lock: {
      alias: "l",
      type: "boolean",
      description: "Delete lock files"
    },
    modules: {
      alias: "m",
      type: "boolean",
      description: "Delete node_modules"
    },
    ...common
  },
  async run(cmd) {
    const config = await cmd.getNuxtConfig()
    const nuxt = await cmd.getNuxt(config)

    const rootPath = nuxt.options.rootDir + "/"
    const stripRoot = (path) => path.replace(rootPath, "")

    const buildDir = stripRoot(nuxt.options.buildDir)
    const generateDir = stripRoot(nuxt.options.generate.dir)

    const args = [buildDir, generateDir, "coverage"]

    if (cmd.argv.lock) args.push("package-lock.json", "yarn.lock")
    if (cmd.argv.modules) args.push("node_modules")

    spawn("rimraf", args, { stdio: "inherit" })
  }
})
