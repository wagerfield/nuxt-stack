import defaults from "./defaults"
import { isFunction, isNotFalse } from "./utils"

export const eslintRule = (options) => ({
  test: /\.(jsx?|tsx?|vue)$/,
  exclude: /node_modules/,
  enforce: "pre",
  use: [
    {
      loader: "eslint-loader",
      options: Object.assign({}, defaults.eslint, options)
    }
  ]
})

export default (options) => (config, context) => {
  if (context.isDev && context.isClient && isNotFalse(options)) {
    const eslintOptions = isFunction(options) ? options(context) : options
    const rule = eslintRule(eslintOptions)
    config.module.rules.push(rule)
  }
}
