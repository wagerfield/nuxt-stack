import Vue from "vue"
import Hydrate from "vue-lazy-hydration"

export default (context) => {
  let opts = <%= serialize(options) %>
  if (typeof opts === "function") opts = opts(context)

  const pluginOptions = Object.assign({ name: "VHydrate" }, opts)

  Vue.component(pluginOptions.name, Hydrate)
}
