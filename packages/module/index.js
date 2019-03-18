import { getDefaultNuxtConfig } from "@nuxt/config"
import {
  assoc,
  inject,
  insert,
  isNotNil,
  isNotEmpty,
  isNotFalse,
  preconnectLink
} from "./utils"
import copyIcon from "./icon"
import defaults from "./defaults"
import addESLint from "./eslint"
import addPlugins from "./plugins"
import meta from "./package.json"

export default async function NuxtStack(options) {
  const stack = Object.assign({}, defaults.stack, this.options.stack, options)
  const config = inject(getDefaultNuxtConfig(), this.options)
  const unshift = config(insert("unshift"), true)
  const push = config(insert("push"), true)
  const assign = config(assoc)

  // Defaults
  assign("hardSource", true)

  // Styles
  if (isNotFalse(stack.normalizeCSS)) unshift("css", "normalize.css")
  push("css", this.options.styles)

  // Head: Language
  assign("head.htmlAttrs.lang", stack.lang)

  // Head: Preconnect Links
  if (isNotEmpty(stack.preconnect)) {
    unshift("head.link", stack.preconnect.map(preconnectLink))
  }

  // Generate
  assign("generate.fallback", true)
  assign("generate.subFolders", false)

  // Messages
  assign("messages.back_to_home", "Return to home page")
  assign("messages.error_404", "Page not found")

  // Router
  assign("router.linkActiveClass", "link-active")
  assign("router.linkExactActiveClass", "link-active-exact")

  // Server
  assign("server.host", "0.0.0.0")
  assign("server.port", "5000")

  // Dotenv
  if (isNotFalse(this.options.dotenv)) {
    this.requireModule({
      src: "@nuxtjs/dotenv",
      options: this.options.dotenv
    })
  }

  // Axios
  if (isNotNil(this.options.axios)) {
    this.requireModule({
      src: "@nuxtjs/axios",
      options: this.options.axios
    })
  }

  // PWA
  if (isNotFalse(this.options.pwa)) {
    assign("manifest.name", stack.name)
    assign("manifest.short_name", stack.shortName || stack.name)
    assign("manifest.description", stack.description)
    assign("manifest.theme_color", stack.themeColor)
    assign("manifest.background_color", stack.backgroundColor)

    assign("meta.lang", stack.lang)
    assign("meta.name", stack.name)
    assign("meta.ogHost", stack.host)
    assign("meta.description", stack.description)
    assign("meta.mobileAppIOS", true)

    if (isNotFalse(this.options.icon)) await copyIcon(this.options)

    this.requireModule({
      src: "@nuxtjs/pwa",
      options: this.options
    })
  }

  // Sitemap
  if (isNotFalse(this.options.sitemap)) {
    assign("sitemap.hostname", stack.host)
    assign("sitemap.generate", defaults.sitemap.generate)
    assign("sitemap.gzip", defaults.sitemap.gzip)

    this.requireModule({
      src: "@nuxtjs/sitemap",
      options: this.options.sitemap
    })
  }

  // Keywords
  if (isNotEmpty(stack.keywords)) {
    push("head.meta", {
      hid: "keywords",
      name: "keywords",
      content: stack.keywords.join(",")
    })
  }

  // Style Resources
  if (isNotFalse(this.options.styleResources)) {
    push("styleResources.less", this.options.less)
    push("styleResources.sass", this.options.sass)
    push("styleResources.scss", this.options.scss)
    push("styleResources.stylus", this.options.styl)
    push("styleResources.stylus", this.options.stylus)

    this.requireModule({
      src: "@nuxtjs/style-resources",
      options: this.options.styleResources
    })
  }

  // SVG Loader
  if (isNotFalse(this.options.svgLoader)) {
    this.requireModule({
      src: "nuxt-svg-loader",
      options: this.options.svgLoader
    })
  }

  // Plugins
  addPlugins.call(this)

  // Build
  this.extendBuild(addESLint(this.options.eslint))
}

export { meta }
