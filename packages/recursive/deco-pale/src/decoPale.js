import { brace, bracket }          from '@texting/bracket'
import { _decoFunc } from '@spare/deco-func'
import { pairEnt }   from '@spare/deco-util'
import { COSP }      from '@texting/enum-chars'
import { BOO, FUN, NUM, OBJ, STR } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }     from '@typen/enum-object-types'
import { isNumeric }               from '@typen/num-strict'
import { typ }                     from '@typen/typ'
import { formatDate }              from '@valjoux/format-date'
import { formatTime }              from '@valjoux/format-time'
import { mutate }                  from '@vect/entries-mapper'
import { DEFN }                    from '../resources/DEFN.js'
import { decoKey }                 from './decoKey.js'

// for esm js, number/strings are treated by their type
export function decoPale(node) {
  const { loose, cite } = this
  if (node === void 0 || node === null) return node
  const t = typeof node
  if (t === NUM || t === BOO) return node
  if (t === STR) return loose && isNumeric(node) ? node : (cite(node))
  if (t === FUN) return cite(_decoFunc.call(DEFN, node))
  if (t === OBJ) {
    const pt = typ(node)
    if (pt === ARRAY) return bracket(node.map(decoPale.bind(this)).join(COSP))
    if (pt === OBJECT) return brace(mutate(Object.entries(node), decoKey, decoPale.bind(this)).map(pairEnt).join(COSP))
    if (pt === DATE) return cite(`${formatDate(node)}'${formatTime(node)}`)
  }
  return cite(String(node))
}








