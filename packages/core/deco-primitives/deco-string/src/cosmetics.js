import { MUTABLE }    from '@analys/enum-mutabilities'
import { fluoVector } from '@palett/fluo-vector'
import { LF, TB }     from '@spare/enum-chars'
import { fold }       from '@spare/fold'
import { hasAnsi }    from '@spare/lange'

/**
 * @prop width - foldToVector
 * @prop firstLineIndent - foldToVector
 * @prop indent - applicable only when valid width
 * @prop vectify - fluoString
 * @prop joiner - fluoString
 * @prop presets - fluoString
 * @prop effects - fluoString
 * @param text
 * @return {string}
 */

export const cosmetics = function (text) {
  const context = this, length = text?.length
  if (!length) return ''
  if (hasAnsi(text)) return text
  const { width, presets } = context
  if (width && length > width) text = fold.call({
    width: width,
    firstLineIndent: context.firstLineIndent,
    delim: LF + TB.repeat(context.indent ?? 0)
  }, text)
  if (presets) text = fluoString.call(context, text)
  return text
}

export const fluoString = function (text) {
  const { vectify, joiner, presets, effects } = this
  const words = vectify(text)
  fluoVector.call(MUTABLE, words, presets, effects)
  return joiner ? joiner(words) : words.join('')
}
