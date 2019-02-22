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
    preconnect: [
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com"
    ]
  },
  webfonts: {
    google: {
      families: [
        "Barlow Condensed:700",
        "Roboto Mono:400"
      ]
    }
  }
}
