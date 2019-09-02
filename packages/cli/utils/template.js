const consola = require("consola")
const config = require("prettier-config-nuxt-stack")
const { resolveTemplate } = require("nuxt-stack-templates")
const { basename, join, relative } = require("path")
const { bindAll, get, template } = require("lodash")
const { format, getFileInfo } = require("prettier")
const {
  copySync,
  moveSync,
  lstatSync,
  readFileSync,
  outputFileSync,
  pathExistsSync
} = require("fs-extra")

const DEFAULTS = {
  generateDir: "dist",
  buildDir: ".nuxt",
  srcDir: ""
}

class Template {
  constructor(options) {
    this.rootDir = get(options, "rootDir")
    this.srcDir = get(options, "srcDir", "")
    this.buildDir = get(options, "buildDir", ".nuxt")
    this.generateDir = get(options, "generateDir", "dist")

    // Options
    this.exclude = get(options, "exclude", [".DS_Store"])
    this.configFile = get(options, "configFile", "nuxt.config.js")
    this.logPrefix = get(options, "logPrefix", "Generated:")
    this.overwrite = get(options, "overwrite", false)

    // Bind
    bindAll(this, ["filter", "copy", "compile", "output", "write"])
    bindAll(this, ["log", "cfg", "tpl", "dst", "src", "dot", "slash"])
  }

  filter(src, dst) {
    const include = !this.exclude.includes(basename(src))
    if (include && lstatSync(src).isFile()) {
      if (this.overwrite || !pathExistsSync(dst)) this.log(dst)
    }
    return include
  }

  copy(src, dst) {
    copySync(src, dst, {
      overwrite: this.overwrite,
      filter: this.filter
    })
  }

  move(src, dst) {
    moveSync(src, dst, {
      overwrite: this.overwrite
    })
  }

  compile(src, fmt) {
    const info = getFileInfo.sync(src)
    const ignore = info.ignored || fmt === false
    const content = template(readFileSync(src, "utf8"))(this)
    const options = { parser: info.inferredParser, ...config }
    return ignore ? content : format(content, options)
  }

  output(str, dst) {
    if (this.overwrite || !pathExistsSync(dst)) {
      outputFileSync(dst, str)
      this.log(dst)
    }
  }

  write(src, dst, fmt) {
    this.output(this.compile(src, fmt), dst)
  }

  log(dst, prefix) {
    consola.info(prefix || this.logPrefix, relative(this.rootDir, dst))
  }

  cfg(key) {
    return this[key] !== DEFAULTS[key] && this[key]
  }

  tpl(...args) {
    return resolveTemplate(...args)
  }

  dst(...args) {
    return join(this.rootDir, ...args)
  }

  src(...args) {
    return join(this.rootDir, this.srcDir, ...args)
  }

  dot(path) {
    return path || "."
  }

  slash(path) {
    return path && `${path}/`
  }
}

module.exports = Template
