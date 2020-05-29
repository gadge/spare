import { MUTABLE } from '@analys/enum-mutabilities'
import { fluoVec } from '@palett/fluo-vector'

export const Splitter = (delim) => x => String.prototype.split.call(x, delim)
export const Joiner = (delim) => v => Array.prototype.join.call(v, delim)

export const cosmetics = function (text) {
  const { delim, vectify, joiner, presets } = this
  const words = vectify(text)
  fluoVec.call(MUTABLE, words, presets)
  return (joiner ?? Joiner(delim))(words)
}

// filter: x => typeof x === STR ? x.trim().length > 0 : true
