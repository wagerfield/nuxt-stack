const setNuxtSrcDir = (config) => {
  let srcDir = (config && config.srcDir) || ""
  srcDir = srcDir.replace(config.rootDir, "")
  srcDir = srcDir.replace(/^\//, "")
  srcDir = srcDir.replace(/\/$/, "")
  process.env.NUXT_SRC_DIR = srcDir
}

const getNuxtSrcDir = (config) => {
  let srcDir = config && config.srcDir
  if (!srcDir) srcDir = process.env.NUXT_SRC_DIR
  return typeof srcDir === "string" ? srcDir : "src"
}

const getNodeEnv = () => process.env.NODE_ENV

const isTest = () => getNodeEnv() === "test"

const isProd = () => getNodeEnv() === "production"

const isDev = () => getNodeEnv() !== "production"

module.exports = {
  setNuxtSrcDir,
  getNuxtSrcDir,
  getNodeEnv,
  isTest,
  isProd,
  isDev
}
