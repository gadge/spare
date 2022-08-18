import { PAL }                                    from '@spare/deco-colors'
import { decoDate, decoDateTime }                 from '@spare/deco-date'
import { decoFunc, funcName }                     from '@spare/deco-func'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT, SET }               from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { mapKeyVal }                              from '@vect/object-mapper'
import { isVector }                               from '@vect/vector-index'
import { Typo }                                   from './Typo.js'

export function depth(node) {
  let d = 0
  while (true) {
    if (isVector(node)) { [ node ] = node, d++ }
    else { return d }
  }
}


export class Deco extends Typo {
  dp
  vt
  kv
  th
  br = false
  constructor(conf) {
    super(conf)
    this.dp = conf.depth ?? conf.dp ?? 8  // depth 级高于此则不展示
    this.vt = conf.vert ?? conf.vt ?? 1  // vert 级低于则竖排显示
    this.kv = conf.unit ?? conf.kv ?? 32 // unit 值/键值对的元素宽度大于此, 则进行竖排
    this.th = conf.width ?? conf.th ?? 80 // width 行字符的宽度大于此, 则换行
    this.br = conf.broad ?? conf.br ?? false
  }

  node(x, id = 0, sr = 0) {
    const t = typeof x
    if (t === STR) return isNumeric(x) ? x : this.nodeString(x, id, sr)
    if (t === NUM || t === BIG) return x
    if (t === FUN) return (id >> 1) >= this.dp ? funcName(x) : decoFunc(x, this)
    if (t === OBJ) {
      const { dp } = this, pt = typ(x)
      if (pt === ARRAY) return (id >> 1) >= dp ? '[array]' : this.nodeVector(x, id)
      if (pt === OBJECT) return (id >> 1) >= dp ? '{object}' : this.nodeObject(x, id)
      if (pt === DATE) return (id >> 1) >= dp ? decoDate(x) : decoDateTime(x)
      // if (pt === MAP) return lv >= dp ? '(map)' : this.entries([ ...x.entries() ], lv)
      if (pt === SET) return (id >> 1) >= dp ? '(set)' : `set:${this.nodeVector([ ...x ], id)}`
      return `${x}`
    }
    if (t === BOO) return PAL.BOO(x)
    if (t === UND || t === SYM) return PAL.UDF(x)
    return `${x}`
  }

  threshold(id) { return (id >> 1) < this.vt ? 0 : this.th }
  nodeString(str, id = 0, sr) {
    return this.string(str, this.th, this.br ? id : id + 2, sr)
  }
  nodeVector(vec, id = 0) {
    switch (depth(vec)) {
      case 0:
        return '[]'
      case 1:
        vec = vec.map(v => this.node(v, id + 2))
        return this.vector(vec, this.threshold(id), id)
      case 2:
        return this.matrix(vec, id)
      default:
        vec = vec.map(v => this.node(v, id + 1))
        return this.vector(vec, NaN)
    }
  }
  nodeObject(obj, id = 0) {

    obj = mapKeyVal(obj, (k, v) => {
      const sr = id + 2 + k.length + 2
      const nx = this.br
        ? sr >= (this.th >> 1) ? (id + 4) : sr
        : id + 2
      return this.node(v, nx, sr) // nx could also be id+2, alternatively
    })
    return this.object(obj, this.threshold(id), id)
  }
}