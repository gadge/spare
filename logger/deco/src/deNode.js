import { ARRAY, OBJECT, MAP, SET, BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enums'
import { isNumeric } from '@typen/num-loose'
import { fluoVector } from '@palett/fluo-vector'
import { fluoEntries } from '@palett/fluo-entries'
import { typ } from '@typen/typ'
import { mutate as mutateEntries } from '@vect/entries-mapper'
import { mutate as mutateVector } from '@vect/vector-mapper'
import { BRK, BRC, PAL, IDX, brk, brc } from './theme'
import { stringifyEntries } from './utils/stringifyEntries'
import { stringifyVector } from './utils/stringifyVector'
import { deFn } from './utils/deFn'

/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */
export function deNode (node, lv = 0) {
  if (!this.color) return deNodePlain.call(this, node, lv)
  switch (typeof node) {
    case STR:
      return isNumeric(node) ? node : PAL.STR(node)
    case OBJ:
      return deOb.call(this, node, lv)
    case NUM:
    case BIG:
      return node
    case FUN:
      return deFn.call(this, node)
    case BOO:
      return PAL.BOO(node)
    case UND:
    case SYM:
      return PAL.UDF(node)
  }
}

export const deOb = function (node, lv) {
  const { hi } = this
  switch (node |> typ) {
    case ARRAY:
      return lv >= hi ? '[array]' : deVe.call(this, node.slice(), lv) |> BRK[lv & 7]
    case OBJECT :
      return lv >= hi ? '{object}' : deEn.call(this, Object.entries(node), lv) |>  BRC[lv & 7]
    case MAP:
      return lv >= hi ? '(map)' : deEn.call(this, [...node.entries()], lv) |> BRK[lv & 7]
    case SET:
      return lv >= hi ? '(set)' : `set:[${deVe.call(this, [...node], lv)}]`
    default:
      return `${node}`
  }
}

/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */
export function deNodePlain (node, lv = 0) {
  const t = typeof node
  if (t === OBJ) {
    const { hi } = this, pt = node |> typ
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
  if (this.color) fluoVector(vector, { mutate: true })
  return stringifyVector.call(this, vector, lv)
}

export let deEn = function (entries, lv) {
  mutateEntries(entries, k => String(k), v => String(deNode.call(this, v, lv + 1)))
  if (this.color) fluoEntries(entries, { stringPreset: IDX[lv & 7], mutate: true })
  return stringifyEntries.call(this, entries, lv)
}




