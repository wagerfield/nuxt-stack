#!/usr/bin/env node

const spawn = require("cross-spawn")
const { NuxtCommand } = require("@nuxt/cli")
const { common, server } = require("../options")

NuxtCommand.run({
  name: "stats",
  description: "Show build stats with webpack analyser",
  usage: "stats",
  options: {
    ...server,
    ...common
  },
  run(cmd) {
    const args = ["build", "--analyze"].concat(cmd._argv)
    spawn("nuxt", args, { stdio: "inherit" })
  }
})
