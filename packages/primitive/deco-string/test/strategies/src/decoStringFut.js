import { MUTABLE }      from '@analys/enum-mutabilities'
import { fluoVector }   from '@palett/fluo-vector'
import { splitLiteral } from '@texting/splitter'
import { Joiner }       from '../../../src/decoString.js'

export const decoStringFut = function (text) {
  // const { delim, vectify, joiner, presets } = this ?? {}
  const delim = this?.delim ?? ''
  const vectify = this?.vectify ?? splitLiteral
  const joiner = this?.joiner ?? Joiner(delim)
  const presets = this?.presets
  const words = (vectify ?? splitLiteral)(text)
  fluoVector.call(MUTABLE, words, presets)
  return (joiner ?? Joiner(delim))(words)
}
