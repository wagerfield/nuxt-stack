const { join } = require("path")

const templatesDir = __dirname

module.exports = {
  resolveTemplate: (...args) => join(templatesDir, ...args),
  templatesDir
}
