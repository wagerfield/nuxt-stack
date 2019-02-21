import Vue from "vue"
import VueTabbing from "vue-tabbing"

export default (context) => {
  let opts = <%= serialize(options) %>
  if (typeof opts === "function") opts = opts(context)

  Vue.use(VueTabbing, opts)
}
