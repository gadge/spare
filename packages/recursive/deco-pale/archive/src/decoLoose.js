import { brace, bracket }          from '@texting/bracket'
import { _decoFunc } from '@spare/deco-func'
import { pairEnt }   from '@spare/deco-util'
import { COSP }      from '@texting/enum-chars'
import { tenseQuote }              from '@spare/quote'
import { BOO, FUN, NUM, OBJ, STR } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }     from '@typen/enum-object-types'
import { typ }                     from '@typen/typ'
import { formatDate }              from '@valjoux/format-date'
import { formatTime }              from '@valjoux/format-time'
import { mutate }                  from '@vect/entries-mapper'
import { DEFN }                    from '../../resources/DEFN.js'
import { decoKey }                 from '../decoKey.js'

// for esm js, number/strings are treated by their type
export function decoValue(node) {
  if (node === void 0 || node === null) return node
  const t = typeof node
  if (t === NUM || t === BOO) return node
  if (t === STR) return tenseQuote(node)
  if (t === FUN) return tenseQuote(_decoFunc.call(DEFN, node))
  if (t === OBJ) {
    const pt = typ(node)
    if (pt === ARRAY) return bracket(node.map(decoValue).join(COSP))
    if (pt === OBJECT) return brace(mutate(Object.entries(node), decoKey, decoValue).map(pairEnt).join(COSP))
    if (pt === DATE) return tenseQuote(`${formatDate(node)}'${formatTime(node)}`)
  }
  return tenseQuote(node.toString())
}
