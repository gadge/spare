import { MUTATE_PIGMENT }                    from '@palett/enum-colorant-modes'
import { fluoEntries }                       from '@palett/fluo-entries'
import { fluoVector }                        from '@palett/fluo-vector'
import { BRC, BRK, PAL }                     from '@spare/deco-colors'
import { decoDateTime }                      from '@spare/deco-date'
import { _decoFunc, DECOFUN_CONFIG }         from '@spare/deco-func'
import { COSP, RT }                          from '@spare/enum-chars'
import { BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }               from '@typen/enum-object-types'
import { typ }                               from '@typen/typ'
import { mutate }                            from '@vect/column-mapper'

export function _decoFlat(lv, node) {
  const t = typeof node
  if (t === STR) return node // isNumeric(node) ? node : PAL.STR(node)
  if (t === NUM) return node
  if (t === FUN) return _decoFunc.call(DECOFUN_CONFIG, node)
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

function deVec(lv, ve) {
  const config = this
  // const presets = this?.presets
  const list = ve.map(_decoFlat.bind(config, lv + 1))
  fluoVector.call(MUTATE_PIGMENT, list, config.presets)
  return list.join(COSP)
}

function deOb(lv, ob) {
  const config = this
  // const presets = this?.presets
  const ents = mutate(Object.entries(ob), 1, _decoFlat.bind(this, lv + 1))
  fluoEntries.call(MUTATE_PIGMENT, ents, config.presets)
  return ents.map(([k, v]) => k + RT + v).join(COSP)
}















