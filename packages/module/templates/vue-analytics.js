import Vue from "vue"
import VueAnalytics from "vue-analytics"
import merge from "deepmerge"

export default (context) => {
  let opts = <%= serialize(options) %>
  if (typeof opts === "function") opts = opts(context)

  const debug = { sendHitTask: !context.isDev }
  const pluginOptions = merge({ debug }, opts)

  pluginOptions.router = context.app.router

  Vue.use(VueAnalytics, pluginOptions)
}
