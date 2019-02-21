#!/usr/bin/env node

const spawn = require("cross-spawn")
const { includes, without } = require("lodash")
const { setNuxtSrcDir } = require("nuxt-stack-utils")
const { NuxtCommand } = require("@nuxt/cli")
const { common } = require("../options")

const PRESET = "jest-preset-nuxt-stack"

NuxtCommand.run({
  name: "test",
  description: "Run tests with Jest",
  usage: "test <pattern>",
  options: {
    related: {
      alias: "r",
      type: "boolean",
      description: "Alias to --findRelatedTests"
    },
    ...common
  },
  async run(cmd) {
    setNuxtSrcDir(await cmd.getNuxtConfig())
    const args = without(cmd._argv, "--related", "-r")
    if (cmd.argv.related) args.push("--findRelatedTests")
    if (!includes(args, "--preset")) args.push("--preset", PRESET)
    spawn("jest", args, { stdio: "inherit" })
  }
})
