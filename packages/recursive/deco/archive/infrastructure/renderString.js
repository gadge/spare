import { _decoString }  from '@spare/deco-string'
import { splitLiteral } from '@texting/splitter'

export const renderString = function (string, level, indent) {
  const width = this.string?.width ?? this.width ?? 0, presets = this.string?.presets ?? null
  return _decoString.call({ vectify: splitLiteral, presets, width, indent: level + 1, firstLineIndent: indent, }, string)
}