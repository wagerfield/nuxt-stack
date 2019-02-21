<%(options.plugins || [
  "respimg",
  "optimumx",
  "object-fit",
  "parent-fit"
]).forEach((plugin) => {%>import "lazysizes/plugins/<%=plugin%>/ls.<%=plugin%>"<% }) %>
import lazysizes from "lazysizes"

export default (context) => {
  let opts = <%= serialize(options.options) %>
  if (typeof opts === "function") opts = opts(context)

  Object.assign(lazysizes.cfg, opts)
}
