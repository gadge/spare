import { typ } from '@typen/typ'
import { COSP } from '@spare/enum-chars'
import { BOO, FUN, NUM, OBJ, STR } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT } from '@typen/enum-object-types'
import { tenseQuote as quote } from '@spare/quote'
import { decoKey } from './decoKey'
import { isNumeric } from '@typen/num-loose'
import { mutate } from '@vect/entries-mapper'
import { brace, bracket } from '@spare/bracket'
import { formatDate } from '@valjoux/format-date'
import { formatTime } from '@valjoux/format-time'
import { pairEnt } from '@spare/deco-util'
import { DEFN } from '../resources/DEFN'

const TextParsers = {
  loose: (x, t) => {
    if (t === NUM) return x
    if (t === STR) return isNumeric(x) ? x : quote(x)
    return x.toString() |> quote
  },
  standard: (x, t) => {
    if (t === NUM) return x
    if (t === STR) return x |> quote
    return x.toString() |> quote
  },
  strict: (x, t) => {
    if (t === NUM) return x|> quote
    if (t === STR) return x|> quote
    return x.toString() |> quote
  },
}
// for esm js, number/strings are treated by their type
export function decoval (node) {
  const { loose } = this
  if (node === void 0 || node === null) return node
  const t = typeof node
  if (t === NUM || t === BOO) return node
  if (t === STR) return loose && isNumeric(node) ? node : quote(node)
  if (t === FUN) return decofun.call(DEFN, node) |> quote
  if (t === OBJ) {
    const pt = typ(node)
    if (pt === ARRAY) return node.map(decoval.bind(this)).join(COSP) |> bracket
    if (pt === OBJECT) return mutate(Object.entries(node), decoKey, decoval.bind(this)).map(pairEnt).join(COSP) |> brace
    if (pt === DATE) return `${formatDate(node)}'${formatTime(node)}` |> quote
  }
  return node.toString() |> quote
}








