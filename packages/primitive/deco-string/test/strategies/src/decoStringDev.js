import { MUTABLE }      from '@analys/enum-mutabilities'
import { fluoVector }   from '@palett/fluo-vector'
import { splitLiteral } from '@texting/splitter'
import { Joiner }       from '../../../src/decoString.js'

export const decoStringDev = function (text) {
  const { delim = '', vectify = splitLiteral, joiner, presets } = this ?? {}
  const words = vectify(text)
  fluoVector.call(MUTABLE, words, presets)
  return (joiner ?? Joiner(delim))(words)
}
