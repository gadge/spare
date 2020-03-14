import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, MAP, OBJECT, SET } from '@typen/enum-object-types'
import { isNumeric } from '@typen/num-loose'
import { typ } from '@typen/typ'
import { fluoVector } from '@palett/fluo-vector'
import { fluoEntries } from '@palett/fluo-entries'
import { mutate as mutateEntries } from '@vect/entries-mapper'
import { mutate as mutateVector } from '@vect/vector-mapper'
import { BRC, brc, brk, BRK, IDX, PAL } from './theme'
import { stringifyEntries } from './utils/stringifyEntries'
import { stringifyVector } from './utils/stringifyVector'
import { deFn } from './utils/deFn'

export function deNode (node, lv = 0) {
  return this.pr
    ? deNodePretty.call(this, node, lv)
    : deNodePlain.call(this, node, lv)
}

/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */
export function deNodePretty (node, lv = 0) {
  const t = typeof node
  if (t === STR) return isNumeric(node) ? node : PAL.STR(node)
  if (t === NUM || t === BIG) return node
  if (t === OBJ) {
    const { hi } = this, pt = typ(node)
    if (pt === ARRAY) return lv >= hi ? '[array]' : deVe.call(this, node.slice(), lv) |> BRK[lv & 7]
    if (pt === OBJECT) return lv >= hi ? '{object}' : deEn.call(this, Object.entries(node), lv) |>  BRC[lv & 7]
    if (pt === MAP) return lv >= hi ? '(map)' : deEn.call(this, [...node.entries()], lv) |> BRK[lv & 7]
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`
    return `${node}`
  }
  if (t === FUN) return deFn.call(this, node)
  if (t === BOO) return PAL.BOO(node)
  if (t === UND || t === SYM) return PAL.UDF(node)
}

export function deNodePlain (node, lv = 0) {
  const t = typeof node, { qm } = this
  if (t === STR) return qm ? qm + node + qm : node
  if (t === OBJ) {
    const { hi } = this, pt = typ(node)
    if (pt === ARRAY) return lv >= hi ? '[array]' : deVe.call(this, node.slice(), lv) |> brk
    if (pt === OBJECT) return lv >= hi ? '{object}' : deEn.call(this, Object.entries(node), lv) |> brc
    if (pt === MAP) return lv >= hi ? '(map)' : deEn.call(this, [...node.entries()], lv) |> brk
    if (pt === SET) return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`
    return `${node}`
  }
  if (t === FUN) return deFn.call(this, node)
  return node
}

export let deVe = function (vector, lv) {
  mutateVector(vector, v => String(deNode.call(this, v, lv + 1)))
  if (this.pr) fluoVector(vector, { mutate: true })
  return stringifyVector.call(this, vector, lv)
}

export let deEn = function (entries, lv) {
  mutateEntries(entries, k => String(k), v => String(deNode.call(this, v, lv + 1)))
  if (this.pr) fluoEntries(entries, { stringPreset: IDX[lv & 7], mutate: true })
  return stringifyEntries.call(this, entries, lv)
}




