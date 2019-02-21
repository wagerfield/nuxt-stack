import formatter from "eslint/lib/formatters/codeframe"

export default {
  icon: {
    iconFileName: "icon.png"
  },
  eslint: {
    emitWarning: true,
    cache: true,
    fix: true,
    formatter
  },
  sitemap: {
    generate: true,
    gzip: true
  },
  stack: {
    lang: "en",
    name: "Nuxt Stack",
    host: "https://nuxtjs.org/",
    description: "Stacks of goodness for Nuxt.",
    keywords: ["nuxt", "stack"],
    backgroundColor: "#FFFFFF",
    themeColor: "#4fc08d",
    image: "og.png"
  }
}
