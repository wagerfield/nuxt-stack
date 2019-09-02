#!/usr/bin/env node

const readPkg = require("read-pkg")
const writePkg = require("write-pkg")
const { join } = require("path")
const { get, merge } = require("lodash")
const { existsSync } = require("fs-extra")
const { NuxtCommand } = require("@nuxt/cli")
const { Template } = require("../utils")
const { common } = require("../options")

NuxtCommand.run({
  name: "init",
  description: "Create starter files",
  usage: "init <dir>",
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
    "template": {
      alias: "t",
      type: "string",
      default: "fancy",
      description: [
        "Project template to use",
        "Options: basic or fancy",
        "Default: fancy"
      ].join("\n")
    },
    "overwrite": {
      alias: "o",
      type: "boolean",
      description: "Overwrite any existing template files"
    },
    "vscode": {
      alias: "e",
      type: "boolean",
      description: "Output VSCode settings and jsconfig\nDefault: false"
    },
    "hooks": {
      alias: "k",
      type: "boolean",
      default: true,
      description: "Inject scripts and hooks into package.json\nDefault: false"
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

    // Nuxt Config
    if (!api.configFile.endsWith(".js")) api.configFile += ".js"

    // Dot Files
    api.copy(api.tpl("dotfiles"), api.dst())
    api.copy(api.tpl("gitignore"), api.dst(".gitignore"))
    api.output("", api.dst(".env"))

    // VSCode Files
    if (cmd.argv.vscode) {
      const tplSettings = api.tpl("vscode/settings.json")
      const tplJSConfig = api.tpl("vscode/jsconfig.json")
      api.write(tplSettings, api.dst(".vscode/settings.json"))
      api.write(tplJSConfig, api.dst("jsconfig.json"))
    }

    // Package Fields
    if (cmd.argv.hooks) {
      const pkgPath = api.dst("package.json")
      const pkgOpts = { cwd: api.dst(), normalize: false }
      const pkgBase = existsSync(pkgPath) ? readPkg.sync(pkgOpts) : {}
      const pkgData = JSON.parse(api.compile(api.tpl("pkg.json")))
      await writePkg(api.dst(), merge(pkgBase, pkgData))
    }

    // Root Files
    api.copy(api.tpl("rootfiles"), api.dst())

    // Project Files
    const tplProjectDir = api.tpl(`projects/${cmd.argv.template}`)
    const tplProjectCfg = join(tplProjectDir, api.configFile)
    api.write(tplProjectCfg, api.dst(api.configFile))
    api.copy(join(tplProjectDir, "src"), api.src())
    api.copy(api.tpl("static"), api.src("static"))
  }
})
