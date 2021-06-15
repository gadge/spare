import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes'
import { fluoVector }     from '@palett/fluo-vector'
import { hasAnsi }        from '@texting/charset-ansi'
import { LF, TB }         from '@texting/enum-chars'
import { fold }           from '@texting/fold'

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
  const
    config = this,
    width = config.width,
    length = text?.length
  if (!length) return ''
  if (hasAnsi(text)) return text
  if (width && length > width) text = fold.call({
    width: width,
    firstLineIndent: config.firstLineIndent,
    delim: LF + TB.repeat(config.indent ?? 0)
  }, text)
  if (config.presets) text = stringColour.call(config, text)
  return text
}

export const stringColour = function (text) {
  const config = this
  const { vectify, joiner } = this
  const words = vectify(text)
  fluoVector.call(MUTATE_PIGMENT, words, config.presets) // use: presets, effects
  return joiner ? joiner(words) : words.join('')
}
