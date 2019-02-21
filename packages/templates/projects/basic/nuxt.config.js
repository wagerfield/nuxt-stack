export default {<%
  if (cfg('srcDir')) { %>
  srcDir: "<%= cfg('srcDir') %>",<% } %><%
  if (cfg('buildDir')) { %>
  buildDir: "<%= cfg('buildDir') %>",<% } %><%
  if (cfg('generateDir')) { %>
  generate: { dir: "<%= cfg('generateDir') %>" },<% } %>
  modules: ["nuxt-stack"]
}
