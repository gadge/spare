import { lange } from '@spare/lange'
import { lpad, RN } from '@spare/util'
import { mutate as mutateEntries } from '@vect/entries-mapper'
import { ColumnMutate } from '@vect/column-mapper'
import { fluoVector } from '@palett/fluo-vector'
import { fluoEntries } from '@palett/fluo-entries'
import { NumLoose, Typ } from 'typen'
import { BRK, BRC, PAL, IndexPresets } from './theme'
import { logger } from '@spare/logger'
import { xr } from '@spare/xr'

const { initial } = Typ
const { isNumeric } = NumLoose
const keysMutate = ColumnMutate(0)

/**
 *
 * @param {*} node
 * @param {number} [lv]
 * @return {string}
 */
export function deNode (node, lv = 0) {
  switch ((typeof node).slice(0, 3)) {
    case 'str':
      return isNumeric(node) ? node : PAL.STR(node)
    case 'obj':
      return deOb.call(this, node, lv)
    case 'num':
    case 'big':
      return node
    case 'fun':
      return deFn.call(this, node)
    case 'boo':
      return PAL.BOO(node)
    case 'und':
    case 'sym':
      return PAL.UDF(node)
  }
}

export const deOb = function (node, lv) {
  const { hi, tb } = this
  this.rn = RN + tb.repeat(lv)
  switch (node |> initial) {
    case 'Arr':
      return lv >= hi ? '[array]' : deAr.call(this, node, lv) |> BRK[lv & 7]
    case 'Obj' :
      return lv >= hi ? '{object}' : deEn.call(this, Object.entries(node), lv) |> BRC[lv & 7]
    case 'Map':
      return lv >= hi ? '(map)' : deEn.call(this, [...node.entries()], lv) |> BRK[lv & 7]
    case 'Set':
      return lv >= hi ? '(set)' : `set:[${deAr.call(this, [...node], lv)}]`
    default:
      return `${node}`
  }
}

export let deAr = function (arr, lv) {
  let { rn, tb, al } = this, cap = 0, wrap = false
  arr = arr.map(v => {
    v = String(deNode.call(this, v, lv + 1))
    if (!wrap && (cap += lange(v)) > al) wrap = true
    return v
  })
  fluoVector(arr, { mutate: true })
  return wrap
    ? `${rn}  ${arr.join(`,${rn + tb}`)}${rn}`
    : arr.join(',')
}

export let deEn = function (entries, lv) {
  const { vo, rn, tb } = this
  let pad = 0, cap = 0, wrap = lv < vo, kw, vw
  mutateEntries(entries,
    k => {
      if ((kw = lange(k = String(k))) > pad) pad = kw
      if (!wrap && (cap += kw) > 48) wrap = true
      return k
    },
    v => {
      v = String(deNode.call(this, v, lv + 1))
      if (!wrap && (cap += (vw = lange(v)) > 48)) wrap = true
      return v
    })
  if (wrap) keysMutate(entries, k => lpad(k, pad, true), entries.length)
  entries = fluoEntries(entries, { mutate: true, stringPreset: IndexPresets[lv & 7] })
    .map(([k, v]) => `${k}: ${v}`)
  return wrap
    ? `${rn}  ${entries.join(`,${rn + tb}`)}${rn}`
    : entries.join(', ')
}

export const deFn = function (fn) {
  // const result = 'simple_lambda(x) => "".concat(x);'
  // const reg = /{[\s]+(return)/g
  // reg.exec(`${fn}`).map(it => `(${it})`)|> logger
  fn = (fn = `${fn}`).startsWith('function') ? fn.slice(9) : fn
  return fn |> PAL.FNC
}
