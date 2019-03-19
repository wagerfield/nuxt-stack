export default {<%
  if (cfg('srcDir')) { %>
  srcDir: "<%= cfg('srcDir') %>",<% } %><%
  if (cfg('buildDir')) { %>
  buildDir: "<%= cfg('buildDir') %>",<% } %><%
  if (cfg('generateDir')) { %>
  generate: {
    dir: "<%= cfg('generateDir') %>"
  },<% } %>
  modules: ["nuxt-stack"],
  styles: ["styles/index.scss"],
  styleResources: {
    scss: ["styles/theme.scss"]
  },
  stack: {
    name: "Nuxt Stack",
    host: "https://nuxtstack.org/",
    description: "Stacks of goodness for Nuxt",
    keywords: ["nuxt", "stack"],
    backgroundColor: "#FFFFFF",
    themeColor: "#4FC08D",
    preconnect: [
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com"
    ]
  },
  webfonts: {
    google: {
      families: [
        "Quicksand:500",
        "Roboto Mono:400"
      ]
    }
  }
}
