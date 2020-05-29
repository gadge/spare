import { MUTABLE }      from '@analys/enum-mutabilities'
import { fluoVec }      from '@palett/fluo-vector'
import { splitLiteral } from '@spare/splitter'
import { Joiner }       from '../../../src/cosmetics'

export const decoStringDev = function (text) {
  const { delim = '', vectify = splitLiteral, joiner, presets } = this ?? {}
  const words = vectify(text)
  fluoVec.call(MUTABLE, words, presets)
  return (joiner ?? Joiner(delim))(words)
}
