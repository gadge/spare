import { MUTABLE } from '@analys/enum-mutabilities'
import { fluoVec } from '@palett/fluo-vector'
import { hasAnsi } from '@spare/lange'

export const Splitter = (delim) => x => String.prototype.split.call(x, delim)
export const Joiner = (delim) => v => Array.prototype.join.call(v, delim)

export const cosmetics = function (text) {
  if (!text?.length) return ''
  if (hasAnsi(text)) return text

  const { delim, vectify, joiner, presets, effects } = this
  const words = vectify(text)
  fluoVec.call(MUTABLE, words, presets, effects)
  return (joiner ?? Joiner(delim))(words)
}
