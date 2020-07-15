import { brace, bracket }          from '@spare/bracket'
import { decofun }                 from '@spare/deco-func'
import { pairEnt }                 from '@spare/deco-util'
import { COSP }                    from '@spare/enum-chars'
import { BOO, FUN, NUM, OBJ, STR } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }     from '@typen/enum-object-types'
import { isNumeric }               from '@typen/num-strict'
import { typ }                     from '@typen/typ'
import { formatDate }              from '@valjoux/format-date'
import { formatTime }              from '@valjoux/format-time'
import { mutate }                  from '@vect/entries-mapper'
import { DEFN }                    from '../resources/DEFN'
import { decoKey }                 from './decoKey'

// for esm js, number/strings are treated by their type
export function decoPale(node) {
  const { loose, quote } = this
  if (node === void 0 || node === null) return node
  const t = typeof node
  if (t === NUM || t === BOO) return node
  if (t === STR) return loose && isNumeric(node) ? node : (node |> quote)
  if (t === FUN) return decofun.call(DEFN, node) |> quote
  if (t === OBJ) {
    const pt = typ(node)
    if (pt === ARRAY) return node.map(decoPale.bind(this)).join(COSP) |> bracket
    if (pt === OBJECT) return mutate(Object.entries(node), decoKey, decoPale.bind(this)).map(pairEnt).join(COSP) |> brace
    if (pt === DATE) return `${ formatDate(node) }'${ formatTime(node) }` |> quote
  }
  return String(node) |> quote
}








