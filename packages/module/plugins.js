import { resolve } from "path"
import { either, isFunction, isNotFalse, isPlainObject } from "./utils"

const isPluginOptions = either(isFunction, isPlainObject)

export default function addPlugins() {
  const addPlugin = (key, file, mode, check) => {
    if (check(this.options[key])) {
      this.addPlugin({
        src: resolve(__dirname, `templates/${file}.js`),
        options: this.options[key] || {},
        mode
      })
    }
  }

  // Client Plugins
  addPlugin("webfonts", "webfontloader", "client", isPluginOptions)
  addPlugin("lazysizes", "lazysizes", "client", isNotFalse)
  addPlugin("analytics", "vue-analytics", "client", isPluginOptions)

  // Universal Plugins
  addPlugin("staticData", "vue-static-data", "all", isNotFalse)
  addPlugin("hydration", "vue-lazy-hydration", "all", isNotFalse)
  addPlugin("installer", "vue-pwa-installer", "all", isNotFalse)
  addPlugin("tabbing", "vue-tabbing", "all", isNotFalse)
}
