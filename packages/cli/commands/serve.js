#!/usr/bin/env node

const spawn = require("cross-spawn")
const { resolve } = require("path")
const { first, without } = require("lodash")
const { NuxtCommand } = require("@nuxt/cli")
const { common, server } = require("../options")

NuxtCommand.run({
  name: "serve",
  description: "Serve generated static site",
  usage: "serve <dir>",
  options: {
    banner: {
      alias: "b",
      type: "boolean",
      description: "Display serve banner"
    },
    ...server,
    ...common
  },
  async run(cmd) {
    const config = await cmd.getNuxtConfig()
    const nuxt = await cmd.getNuxt(config)

    const argvDir = first(cmd.argv._)
    const nuxtDir = nuxt.options.generate.dir
    const siteDir = resolve(argvDir || nuxtDir)

    const omit = [argvDir, "-b", "--banner"]
    const argv = without(cmd._argv, ...omit)
    const args = [siteDir].concat(argv)

    process.env.NODE_ENV = cmd.argv.banner ? "development" : "production"

    spawn("serve", args, { stdio: "inherit" })
  }
})
