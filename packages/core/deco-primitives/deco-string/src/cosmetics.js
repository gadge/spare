import { fluoVec } from '@palett/fluo-vector'
import { zipper }  from '@vect/vector-zipper'

const Splitter = (delim) => x => String.prototype.split.call(x, delim)
const Joiner = (delim) => v => Array.prototype.join.call(v, delim)

export const cosmetics = function (text) {
  const { delim } = this
  const { vectify, joiner } = this
  const { colors } = this
  const words = (vectify || Splitter(delim))(text)
  const dyes = fluoVec.call({ colorant: true }, words, colors)
  const dyed = zipper(words, dyes, (word, dye) => word |> dye)
  return (joiner || Joiner(delim))(dyed)
}

// filter: x => typeof x === STR ? x.trim().length > 0 : true
