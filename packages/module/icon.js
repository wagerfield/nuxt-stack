import { resolve } from "path"
import { copyFileSync, existsSync } from "fs-extra"
import { resolveTemplate } from "nuxt-stack-templates"
import defaults from "./defaults"

export default function copyIcon(nuxtOptions) {
  const iconOptions = Object.assign({}, defaults.icon, nuxtOptions.icon)

  const { iconFileName, iconSrc } = iconOptions
  const { dir, srcDir } = nuxtOptions

  const iconSrcPath = resolveTemplate("static/icon.png")
  const iconDestPath = iconSrc || resolve(srcDir, dir.static, iconFileName)
  const iconExists = existsSync(iconDestPath)

  if (!iconExists) copyFileSync(iconSrcPath, iconDestPath)
}
