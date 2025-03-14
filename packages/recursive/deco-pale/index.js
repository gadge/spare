import { decoFunc }                from '@spare/deco-func'
import { pairEnt }                 from '@spare/deco-util'
import { brace, bracket }          from '@texting/bracket'
import { cite as citeFn }          from '@texting/cite'
import { COSP }                    from '@texting/enum-chars'
import { BOO, FUN, NUM, OBJ, STR } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }     from '@typen/enum-object-types'
import { isNumeric }               from '@typen/num-strict'
import { typ }                     from '@typen/typ'
import { formatDate }              from '@valjoux/format-date'
import { formatTime }              from '@valjoux/format-time'
import { mutate }                  from '@vect/entries-mapper'
import { DEFN }                    from './resources/DEFN.js'
import { decoKey }                 from './src/decoKey.js'

// const presetConfig = p => {
//   p.loose = p.loose ?? true
//   p.cite = p.cite ?? p.quote ?? cite
//   return p
// }
// export const decoPale = (x, conf = {}) => deco.call(presetConfig(conf), x)

/**
 *
 * @param {*} node
 * @param {Object} conf
 * @param {boolean} [conf.loose] numeral string to be treated as number, so quote is not applicable
 * @param {Function} [conf.cite] function to deal with string
 * @return {string|*}
 */
export function decoPale(node, conf) {
  conf = conf ?? this ?? {}
  // const { loose = true, cite = citeFn } = conf ?? this ?? {}
  const loose = conf?.loose ?? this?.loose ?? true
  const cite = conf?.cite ?? this?.cite ?? citeFn
  if (node === void 0 || node === null) return node
  const t = typeof node
  if (t === NUM || t === BOO) return node
  if (t === STR) return loose && isNumeric(node) ? node : cite(node)
  if (t === FUN) return cite(decoFunc.call(DEFN, node))
  if (t === OBJ) {
    const pt = typ(node)
    if (pt === ARRAY) return bracket(node.map(decoPale.bind(this)).join(COSP))
    if (pt === OBJECT) return brace(mutate(Object.entries(node), decoKey, decoPale.bind(this)).map(pairEnt).join(COSP))
    if (pt === DATE) return cite(`${formatDate(node)}'${formatTime(node)}`)
  }
  return cite(String(node))
}


/**
 *
 * @param {Object} conf
 * @param {boolean} [conf.loose]
 * @param {Function|string|number} [conf.quote]
 */
export function DecoPale(conf = {}) { return decoPale.bind(conf) }

export { decoKey } from './src/decoKey.js'
