#!/usr/bin/env node

const spawn = require("cross-spawn")
const { without } = require("lodash")
const { NuxtCommand } = require("@nuxt/cli")
const { setNuxtSrcDir } = require("nuxt-stack-utils")
const { common } = require("../options")

NuxtCommand.run({
  name: "format",
  description: "Format code with Prettier",
  usage: "format <pattern>",
  options: {
    lint: {
      alias: "l",
      type: "boolean",
      description: "Pass to prettier-eslint"
    },
    ...common
  },
  async run(cmd) {
    setNuxtSrcDir(await cmd.getNuxtConfig())
    const command = cmd.argv.lint ? "prettier-eslint" : "prettier"
    const argv = without(cmd._argv, "--lint", "-l")
    const args = argv.length ? argv : ["--help"]
    spawn(command, args, { stdio: "inherit" })
  }
})
