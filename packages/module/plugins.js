import { resolve } from "path"
import { either, isFunction, isNotFalse, isPlainObject } from "./utils"

const isPluginOptions = either(isFunction, isPlainObject)

export default function addPlugins() {
  const addPlugin = (key, mode, check) => {
    if (check(this.options[key])) {
      this.addPlugin({
        src: resolve(__dirname, `templates/${key}.js`),
        options: this.options[key] || {},
        mode
      })
    }
  }

  // Client Plugins
  addPlugin("webfonts", "client", isPluginOptions)
  addPlugin("analytics", "client", isPluginOptions)
  addPlugin("lazysizes", "client", isNotFalse)

  // Universal Plugins
  addPlugin("installer", "all", isNotFalse)
  addPlugin("hydrate", "all", isNotFalse)
  addPlugin("tabbing", "all", isNotFalse)
  addPlugin("static", "all", isNotFalse)
}
