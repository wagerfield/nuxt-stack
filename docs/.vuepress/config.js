module.exports = {
  title: "Nuxt Stack",
  description: [
    "Supercharge Nuxt with a suite of modules and commands for",
    "building performant applications with zero configuration."
  ].join(" "),
  head: [
    ["link", { rel: "icon", href: `/icons/64x64.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#4fc08d" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "apple-touch-icon", href: `/icons/152x152.png` }],
    ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
    ["meta", { name: "msapplication-TileImage", content: "/icons/144x144.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }]
  ],
  themeConfig: {
    repo: "wagerfield/nuxt-stack",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last updated",
    displayAllHeaders: true,
    sidebar: {
      "/guide/": [
        "",
        "rationale",
        "features",
        "dependencies"
      ],
      "/commands/": [
        "",
        "init",
        "test",
        "lint",
        "format",
        "clean",
        "serve",
        "stats"
      ],
      "/module/": [
        "",
        "plugins",
        "configuration"
      ]
    },
    nav: [
      {
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "Commands",
        link: "/commands/"
      },
      {
        text: "Module",
        link: "/module/"
      }
    ]
  }
}
