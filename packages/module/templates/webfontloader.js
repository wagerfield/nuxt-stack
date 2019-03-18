import WebFont from "webfontloader"

export default (context) => {
  let opts = <%= serialize(options) %>
  if (typeof opts === "function") opts = opts(context)

  WebFont.load(opts)
}
