import Vue from "vue"
import { createInstaller } from "vue-pwa-installer"

export default (context, inject) => {
  let opts = <%= serialize(options) %>
  if (typeof opts === "function") opts = opts(context)

  const installer = createInstaller(Vue, opts)
  const prototypeKey = opts.prototypeKey || "$installer"

  inject(prototypeKey.replace(/^\$/, ""), installer)
}
