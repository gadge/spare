import { MUTABLE }                                from '@analys/enum-mutabilities'
import { fluoEntries }                            from '@palett/fluo-entries'
import { fluoVector }                             from '@palett/fluo-vector'
import { brace, bracket }                         from '@spare/bracket'
import { BRC, BRK, PAL }                          from '@spare/deco-colors'
import { decoDate, decoDateTime }                 from '@spare/deco-date'
import { decoFunc, funcName }                     from '@spare/deco-func'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, MAP, OBJECT, SET }          from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { formatDate }                             from '@valjoux/format-date'
import { formatDateTime }                         from '@valjoux/format-date-time'
import { mutateValues }                           from '@vect/entries-mapper'
import { mutate }        from '@vect/vector-mapper'
import { mutateKeyPad }  from './helpers/mutateKeyPad'
import { renderEntries } from './utils/renderEntries'
import { renderString }  from './utils/renderString'
import { renderVector }  from './utils/renderVector'

export function decoNode(node, level, indent) {
  return this.presets
    ? prettyNode.call(this, node, level, indent)
    : plainNode.call(this, node, level, indent)
}

/**
 *
 * @param {*} node
 * @param {number} [level]
 * @param {number} indent
 * @return {string}
 */
export function prettyNode(node, level = 0, indent) {
  const t = typeof node
  if (t === STR) return isNumeric(node) ? node : renderString.call(this, node, level, indent)
  if (t === NUM || t === BIG) return node
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this)
  if (t === OBJ) {
    const { depth } = this, pt = typ(node)
    if (pt === ARRAY) return level >= depth ? '[array]' : deVe.call(this, node.slice(), level) |> BRK[level & 7]
    if (pt === OBJECT) return level >= depth ? '{object}' : deEn.call(this, Object.entries(node), level) |> BRC[level & 7]
    if (pt === DATE) return level >= depth ? decoDate(node) : decoDateTime(node)
    if (pt === MAP) return level >= depth ? '(map)' : deEn.call(this, [...node.entries()], level) |> BRK[level & 7]
    if (pt === SET) return level >= depth ? '(set)' : `set:[${ deVe.call(this, [...node], level) }]`
    return `${ node }`
  }
  if (t === BOO) return PAL.BOO(node)
  if (t === UND || t === SYM) return PAL.UDF(node)
  return `${ node }`
}

export function plainNode(node, level = 0, indent) {
  const t = typeof node, { qm } = this
  if (t === STR) return qm ? (qm + node + qm) : renderString.call(this, node, level, indent)
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this)
  if (t === OBJ) {
    const { depth } = this, pt = typ(node)
    if (pt === ARRAY) return level >= depth ? '[array]' : deVe.call(this, node.slice(), level) |> bracket
    if (pt === OBJECT) return level >= depth ? '{object}' : deEn.call(this, Object.entries(node), level) |> brace
    if (pt === DATE) return level >= depth ? formatDate(node) : formatDateTime(node)
    if (pt === MAP) return level >= depth ? '(map)' : deEn.call(this, [...node.entries()], level) |> bracket
    if (pt === SET) return level >= depth ? '(set)' : `set:[${ deVe.call(this, [...node], level) }]`
    return `${ node }`
  }
  return node
}

export const deVe = function (vector, lv) {
  mutate(vector, v => String(decoNode.call(this, v, lv + 1)))
  if (this.presets) fluoVector.call(MUTABLE, vector, this.presets)
  return renderVector.call(this, vector, lv)
}

export const deEn = function (entries, lv) {
  const pad = mutateKeyPad(entries)
  mutateValues(entries, v => String(decoNode.call(this, v, lv + 1, pad)))
  if (this.presets) fluoEntries.call(MUTABLE, entries, this.presets)
  return renderEntries.call(this, entries, lv)
}




