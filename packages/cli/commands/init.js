#!/usr/bin/env node

const writePkg = require("write-pkg")
const { join } = require("path")
const { get } = require("lodash")
const { NuxtCommand } = require("@nuxt/cli")
const { Template } = require("../utils")
const { common } = require("../options")

NuxtCommand.run({
  name: "init",
  description: "Create starter files",
  usage: "init",
  options: {
    "src-dir": {
      alias: "s",
      type: "string",
      default: "src",
      description: "Source directory\nDefault: src"
    },
    "build-dir": {
      alias: "b",
      type: "string",
      default: ".nuxt",
      description: "Build directory\nDefault: .nuxt"
    },
    "generate-dir": {
      alias: "g",
      type: "string",
      default: "dist",
      description: "Generate directory\nDefault: dist"
    },
    project: {
      alias: "p",
      type: "string",
      default: "fancy",
      description: [
        "Project template to use",
        "Options: basic or fancy",
        "Default: fancy"
      ].join("\n")
    },
    overwrite: {
      alias: "o",
      type: "boolean",
      description: "Overwrite any existing template files"
    },
    vscode: {
      alias: "e",
      type: "boolean",
      description: "Output VSCode settings and jsconfig"
    },
    ...common
  },
  async run(cmd) {
    const config = await cmd.getNuxtConfig()
    const api = new Template({
      rootDir: get(config, "rootDir"),
      srcDir: get(config, "srcDir", cmd.argv["src-dir"]),
      buildDir: get(config, "buildDir", cmd.argv["build-dir"]),
      generateDir: get(config, "generate.dir", cmd.argv["generate-dir"]),
      configFile: get(cmd, "argv.config-file"),
      overwrite: get(cmd, "argv.overwrite")
    })

    // Dot Files
    api.copy(api.tpl("dotfiles"), api.dst())

    // VSCode Files
    if (cmd.argv.vscode) {
      const tplSettings = api.tpl("vscode/settings.json")
      const tplJSConfig = api.tpl("vscode/jsconfig.json")
      api.write(tplSettings, api.dst(".vscode/settings.json"))
      api.write(tplJSConfig, api.dst("jsconfig.json"))
    }

    // Package Fields
    const pkg = api.compile(api.tpl("pkg.json"))
    await writePkg(api.dst(), JSON.parse(pkg))
    api.log(api.dst("package.json"))

    // Root Files
    api.copy(api.tpl("rootfiles"), api.dst())

    // Project Files
    const tplProjectDir = api.tpl(`projects/${cmd.argv.project}`)
    const tplProjectCfg = join(tplProjectDir, api.configFile)
    api.write(tplProjectCfg, api.dst(api.configFile))
    api.copy(join(tplProjectDir, "src"), api.src())
    api.copy(api.tpl("static"), api.src("static"))
  }
})
