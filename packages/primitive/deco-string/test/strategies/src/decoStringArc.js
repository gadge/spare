import { COLORANT }         from '@palett/enum-colorant-modes'
import { fluoVector }       from '@palett/fluo-vector'
import { mutazip }          from '@vect/vector-zipper'
import { Joiner, Splitter } from '../../../src/_decoString'

export const decoStringArc = function (text) {
  const { delim, vectify, joiner, presets } = this ?? {}
  const words = (vectify ?? Splitter(delim))(text)
  const dyes = fluoVector.call(COLORANT, words, presets)
  mutazip(words, dyes, (word, dye) => word |> dye)
  return (joiner ?? Joiner(delim))(words)
}
