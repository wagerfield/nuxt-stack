import Vue from "vue"
import VueStaticData from "vue-static-data"

export default (context) => {
  let opts = <%= serialize(options) %>
  if (typeof opts === "function") opts = opts(context)

  Vue.use(VueStaticData, opts)
}
