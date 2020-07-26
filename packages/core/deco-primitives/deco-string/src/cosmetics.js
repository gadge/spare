import { MUTABLE }      from '@analys/enum-mutabilities'
import { fluoVector }   from '@palett/fluo-vector'
import { LF, TB }       from '@spare/enum-chars'
import { foldToVector } from '@spare/fold'
import { hasAnsi }      from '@spare/lange'
import { mutate }       from '@vect/vector-mapper'

/**
 * @prop width - foldToVector
 * @prop firstLineIndent - foldToVector
 * @prop indent - applicable only when valid width
 * @prop vectify - fluoString
 * @prop joiner - fluoString
 * @prop presets - fluoString
 * @prop effects - fluoString
 * @param text
 * @return {string|{length}|*}
 */

export const cosmetics = function (text) {
  const context = this, length = text?.length
  if (!length) return ''
  if (hasAnsi(text)) return text
  const { width } = context
  if (width && length > width) {
    const { indent, presets } = context
    const lines = foldToVector.call(context, text)
    if (presets) mutate(lines, fluoString.bind(context))
    return lines.join(LF + TB.repeat(indent ?? 0))
  } else {
    return fluoString.call(context, text)
  }
}

export const fluoString = function (text) {
  const { vectify, joiner, presets, effects } = this
  const words = vectify(text)
  fluoVector.call(MUTABLE, words, presets, effects)
  return joiner ? joiner(words) : words.join('')
}
