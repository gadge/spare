import { cosmetics }    from '@spare/deco-string'
import { splitLiteral } from '@spare/splitter'


export const renderString = function (string, level, indent) {
  const
    width = this.string?.width ?? this.width ?? 0,
    presets = this.string?.presets ?? 0
  return cosmetics.call({
    vectify: splitLiteral,
    presets,
    width,
    indent: level + 1,
    firstLineIndent: indent,
  }, string)
}