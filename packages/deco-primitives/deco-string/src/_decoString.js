import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoVector }     from '@palett/fluo-vector'
import { hasAnsi }        from '@spare/charset'
import { LF, TB }         from '@spare/enum-chars'
import { fold }           from '@spare/fold'

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

export const _decoString = function (text) {
  const config = this, length = text?.length
  if (!length) return ''
  if (hasAnsi(text)) return text
  const { width, presets } = config
  if (width && length > width) text = fold.call({
    width: width,
    firstLineIndent: config.firstLineIndent,
    delim: LF + TB.repeat(config.indent ?? 0)
  }, text)
  if (config.fluos) text = fluoString.call(config, text)
  return text
}

export const fluoString = function (text) {
  const config = this
  const { vectify, joiner } = this
  const words = vectify(text)
  fluoVector.call(MUTATE_PIGMENT, words, config.fluos) // use: presets, effects
  return joiner ? joiner(words) : words.join('')
}
