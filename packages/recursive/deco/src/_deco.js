import { MUTATE_PIGMENT }                         from '@palett/enum-colorant-modes'
import { fluoEntries }                            from '@palett/fluo-entries'
import { fluoVector }                             from '@palett/fluo-vector'
import { BRC, BRK, PAL }                          from '@spare/deco-colors'
import { decoDate, decoDateTime }                 from '@spare/deco-date'
import { decoFunc, funcName }                     from '@spare/deco-func'
import { brace, bracket }                         from '@texting/bracket'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, MAP, OBJECT, SET }          from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { formatDate }                             from '@valjoux/format-date'
import { formatDateTime }                         from '@valjoux/format-date-time'
import { mutateValues }                           from '@vect/entries-mapper'
import { mutate }                                 from '@vect/vector-mapper'
import { mutateKeyPad }                           from './infrastructure/mutateKeyPad'
import { renderEntries }                          from './infrastructure/renderEntries'
import { renderString }                           from './infrastructure/renderString'
import { renderVector }                           from './infrastructure/renderVector'

export function _deco(node, level, indent) {
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
    if (pt === ARRAY) return level >= depth ? '[array]' : BRK[level & 7](deVe.call(this, node.slice(), level))
    if (pt === OBJECT) return level >= depth ? '{object}' : BRC[level & 7](deEn.call(this, Object.entries(node), level))
    if (pt === DATE) return level >= depth ? decoDate(node) : decoDateTime(node)
    if (pt === MAP) return level >= depth ? '(map)' : BRK[level & 7](deEn.call(this, [ ...node.entries() ], level))
    if (pt === SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [ ...node ], level)}]`
    return `${node}`
  }
  if (t === BOO) return PAL.BOO(node)
  if (t === UND || t === SYM) return PAL.UDF(node)
  return `${node}`
}

export function plainNode(node, level = 0, indent) {
  const t = typeof node, { qm } = this
  if (t === STR) return qm ? (qm + node + qm) : renderString.call(this, node, level, indent)
  if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this)
  if (t === OBJ) {
    const { depth } = this, pt = typ(node)
    if (pt === ARRAY) return level >= depth ? '[array]' : bracket(deVe.call(this, node.slice(), level))
    if (pt === OBJECT) return level >= depth ? '{object}' : brace(deEn.call(this, Object.entries(node), level))
    if (pt === DATE) return level >= depth ? formatDate(node) : formatDateTime(node)
    if (pt === MAP) return level >= depth ? '(map)' : bracket(deEn.call(this, [ ...node.entries() ], level))
    if (pt === SET) return level >= depth ? '(set)' : `set:[${deVe.call(this, [ ...node ], level)}]`
    return `${node}`
  }
  return node
}

export const deVe = function (vector, lv) {
  const config = this
  mutate(vector, v => String(_deco.call(config, v, lv + 1)))
  if (config.presets) fluoVector.call(MUTATE_PIGMENT, vector, config.presets)
  return renderVector.call(config, vector, lv)
}

export const deEn = function (entries, lv) {
  const config = this
  const pad = mutateKeyPad(entries)
  mutateValues(entries, v => String(_deco.call(config, v, lv + 1, pad)))
  if (config.presets) fluoEntries.call(MUTATE_PIGMENT, entries, config.presets)
  return renderEntries.call(config, entries, lv)
}




