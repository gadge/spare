import { MUTABLE }                                from '@analys/enum-mutabilities'
import { fluoEnt }                                from '@palett/fluo-entries'
import { fluoVec }                                from '@palett/fluo-vector'
import { brace, bracket }                         from '@spare/bracket'
import { BRC, BRK, PAL }                          from '@spare/deco-colors'
import { decoDate, decoDateTime }                 from '@spare/deco-date'
import { decoFunc, funcName }                     from '@spare/deco-func'
import { deco as decoString }                     from '@spare/deco-string'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, MAP, OBJECT, SET }          from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { formatDate }                             from '@valjoux/format-date'
import { formatDateTime }                         from '@valjoux/format-date-time'
import { mutate as mutateEntries }                from '@vect/entries-mapper'
import { mutate as mutateVector }                 from '@vect/vector-mapper'
import { stringifyEntries }                       from './utils/stringifyEntries'
import { stringifyVector }                        from './utils/stringifyVector'

export function decoNode (node, lv = 0) {
  return this.pr
    ? prettyNode.call(this, node, lv)
    : plainNode.call(this, node, lv)
}

/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */
export function prettyNode (node, lv = 0) {
  const t = typeof node
  if (t === STR) return isNumeric(node) ? node : decoString(node, this)
  if (t === NUM || t === BIG) return node
  if (t === FUN) return lv >= this.hi ? funcName(node) : decoFunc(node, this)
  if (t === OBJ) {
    const { hi } = this, pt = typ(node)
    if (pt === ARRAY) return lv >= hi ? '[array]' : deVe.call(this, node.slice(), lv) |> BRK[lv & 7]
    if (pt === OBJECT) return lv >= hi ? '{object}' : deEn.call(this, Object.entries(node), lv) |>  BRC[lv & 7]
    if (pt === DATE) return lv >= hi ? decoDate(node) : decoDateTime(node)
    if (pt === MAP) return lv >= hi ? '(map)' : deEn.call(this, [...node.entries()], lv) |> BRK[lv & 7]
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`
    return `${node}`
  }
  if (t === BOO) return PAL.BOO(node)
  if (t === UND || t === SYM) return PAL.UDF(node)
  return `${node}`
}

export function plainNode (node, lv = 0) {
  const t = typeof node, { qm } = this
  if (t === STR) return qm ? qm + node + qm : node
  if (t === FUN) return lv >= this.hi ? funcName(node) : decoFunc(node, this)
  if (t === OBJ) {
    const { hi } = this, pt = typ(node)
    if (pt === ARRAY) return lv >= hi ? '[array]' : deVe.call(this, node.slice(), lv) |> bracket
    if (pt === OBJECT) return lv >= hi ? '{object}' : deEn.call(this, Object.entries(node), lv) |> brace
    if (pt === DATE) return lv >= hi ? formatDate(node) : formatDateTime(node)
    if (pt === MAP) return lv >= hi ? '(map)' : deEn.call(this, [...node.entries()], lv) |> bracket
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`
    return `${node}`
  }
  return node
}

export let deVe = function (vector, lv) {
  mutateVector(vector, v => String(decoNode.call(this, v, lv + 1)))
  if (this.pr) fluoVec.call(MUTABLE, vector, this.pr)
  return stringifyVector.call(this, vector, lv)
}

export let deEn = function (entries, lv) {
  mutateEntries(entries, k => String(k), v => String(decoNode.call(this, v, lv + 1)))
  if (this.pr) fluoEnt.call(MUTABLE, entries, this.pr) // [{ preset: INSTA, }, { preset: IDX[lv & 7] }]
  return stringifyEntries.call(this, entries, lv)
}




