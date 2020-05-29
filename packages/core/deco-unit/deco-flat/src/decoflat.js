import { fluoEnt }                           from '@palett/fluo-entries'
import { fluoVec }                           from '@palett/fluo-vector'
import { BRC, BRK, PAL }                     from '@spare/deco-colors'
import { decoDateTime }                      from '@spare/deco-date'
import { decofun, DECOFUN_CONFIG }           from '@spare/deco-func'
import { COSP, RT }                          from '@spare/enum-chars'
import { BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }               from '@typen/enum-object-types'
import { typ }                               from '@typen/typ'
import { mutate }                            from '@vect/column-mapper'

const MUTABLE = { mutate: true }
export function decoflat (lv, node) {
  const t = typeof node
  if (t === STR) return node // isNumeric(node) ? node : PAL.STR(node)
  if (t === NUM) return node
  if (t === FUN) return decofun.call(DECOFUN_CONFIG, node)
  if (t === OBJ) {
    const pt = typ(node)
    if (pt === ARRAY) return deVec.call(this, lv, node) |> BRK[lv & 7]
    if (pt === OBJECT) return deOb.call(this, lv, node) |> BRC[lv & 7]
    if (pt === DATE) return decoDateTime(node)
    return `${node}`
  }
  if (t === BOO) return PAL.BOO(node)
  if (t === UND) return PAL.UDF(node)
  if (t === SYM) return PAL.SYM(node.toString())
  return node
}

function deVec (lv, ve) {
  const presets = this?.presets
  const list = ve.map(decoflat.bind(this, lv + 1))
  fluoVec.call(MUTABLE, list, presets)
  return list.join(COSP)
}

function deOb (lv, ob) {
  const presets = this?.presets
  const ents = mutate(Object.entries(ob), 1, decoflat.bind(this, lv + 1))
  fluoEnt.call(MUTABLE, ents, presets)
  return ents.map(([k, v]) => k + RT + v).join(COSP)
}















