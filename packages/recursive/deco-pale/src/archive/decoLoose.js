import { brace, bracket }          from '@spare/bracket'
import { _decoFunc } from '@spare/deco-func'
import { pairEnt }   from '@spare/deco-util'
import { COSP }      from '@spare/enum-chars'
import { tenseQuote }              from '@spare/quote'
import { BOO, FUN, NUM, OBJ, STR } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }     from '@typen/enum-object-types'
import { typ }                     from '@typen/typ'
import { formatDate }              from '@valjoux/format-date'
import { formatTime }              from '@valjoux/format-time'
import { mutate }                  from '@vect/entries-mapper'
import { DEFN }                    from '../../resources/DEFN'
import { decoKey }                 from '../decoKey'

// for esm js, number/strings are treated by their type
export function decoValue(node) {
  if (node === void 0 || node === null) return node
  const t = typeof node
  if (t === NUM || t === BOO) return node
  if (t === STR) return tenseQuote(node)
  if (t === FUN) return _decoFunc.call(DEFN, node) |> tenseQuote
  if (t === OBJ) {
    const pt = typ(node)
    if (pt === ARRAY) return node.map(decoValue).join(COSP) |> bracket
    if (pt === OBJECT) return mutate(Object.entries(node), decoKey, decoValue).map(pairEnt).join(COSP) |> brace
    if (pt === DATE) return `${formatDate(node)}'${formatTime(node)}` |> tenseQuote
  }
  return node.toString() |> tenseQuote
}
