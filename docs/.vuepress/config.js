module.exports = {
  title: "Nuxt Stack",
  description: [
    "Supercharge Nuxt with a suite of modules, plugins and scripts",
    "for building performant applications with minimal configuration."
  ].join(" "),
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  themeConfig: {
    repo: "wagerfield/nuxt-stack",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    sidebar: "auto",
    nav: [
      {
        text: "Guide",
        link: "/guide"
      },
      {
        text: "Scripts",
        link: "/scripts"
      }
    ]
  }
}
