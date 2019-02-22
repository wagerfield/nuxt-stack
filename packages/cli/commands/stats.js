#!/usr/bin/env node

const spawn = require("cross-spawn")
const { NuxtCommand } = require("@nuxt/cli")
const { common, server } = require("../options")

const args = ["build", "--analyze", "--spa", "--no-generate"]

NuxtCommand.run({
  name: "stats",
  description: "Show build stats with webpack analyser",
  usage: "stats",
  options: {
    ...server,
    ...common
  },
  run(cmd) {
    spawn("nuxt", args.concat(cmd._argv), { stdio: "inherit" })
  }
})
