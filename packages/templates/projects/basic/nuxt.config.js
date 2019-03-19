export default {<%
  if (cfg('srcDir')) { %>
  srcDir: "<%= cfg('srcDir') %>",<% } %><%
  if (cfg('buildDir')) { %>
  buildDir: "<%= cfg('buildDir') %>",<% } %><%
  if (cfg('generateDir')) { %>
  generate: { dir: "<%= cfg('generateDir') %>" },<% } %>
  modules: ["nuxt-stack"],
  stack: {
    name: "Nuxt Stack",
    host: "https://nuxtstack.org/",
    description: "Stacks of goodness for Nuxt",
    keywords: ["nuxt", "stack"]
  }
}
