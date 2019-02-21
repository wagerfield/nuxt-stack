export const eq = (a, b) => a === b

export const not = (f) => (v) => !f(v)

export const both = (f1, f2) => (v) => f1(v) && f2(v)

export const either = (f1, f2) => (v) => f1(v) || f2(v)

export const isType = (t) => (v) => eq(typeof v, t)

export const isNil = (v) => v == null

export const isNotNil = not(isNil)

export const isFalse = (v) => v === false

export const isNotFalse = not(isFalse)

export const isArray = Array.isArray

export const isNotArray = not(isArray)

export const isString = isType("string")

export const isFunction = isType("function")

export const isObject = both(isNotNil, isType("object"))

export const isPlainObject = both(isNotArray, isObject)

export const isNotPlainObject = not(isPlainObject)

export const isEmpty = (v) => v.length === 0

export const isNotEmpty = both(isArray, not(isEmpty))

export const assoc = (key, val, obj) => (obj[key] = val)

export const insert = (method) => (key, val, obj) => {
  if (isNotNil(val)) {
    if (isNotArray(obj[key])) obj[key] = []
    if (isArray(val)) obj[key][method](...val)
    else obj[key][method](val)
  }
}

const transduce = (fn, value, force) => {
  return (acc, key, idx, arr) => {
    let def = acc.def[key]
    let opt = acc.opt[key]
    if (idx === arr.length - 1) {
      const call = force || eq(def, opt)
      if (call) fn(key, value, acc.opt)
      return call
    } else {
      if (isNotPlainObject(def)) def = {}
      if (isNotPlainObject(opt)) opt = acc.opt[key] = {}
      return { def, opt }
    }
  }
}

export const inject = (defaultConfig, options) => {
  return (fn, force) => (path, value, override) => {
    const paths = isString(path) ? path.split(".") : path
    const reducer = transduce(fn, value, force || override)
    const initial = { def: defaultConfig, opt: options }
    return paths.reduce(reducer, initial)
  }
}

export const preconnectLink = (href) => ({
  crossorigin: true,
  rel: "preconnect",
  href
})
