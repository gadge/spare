import { PAL }                                    from '@spare/deco-colors'
import { decoDate, decoDateTime }                 from '@spare/deco-date'
import { decoFunc, funcName }                     from '@spare/deco-func'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT, SET }               from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { POINTWISE }                              from '@vect/matrix'
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
  th
  br
  constructor(conf) {
    super(conf)
    this.dp = conf.depth ?? conf.dp ?? 8     // 更高级不展示
    this.vt = conf.vert ?? conf.vt ?? 1      // 更低级竖排显示
    this.th = conf.width ?? conf.th ?? 80    // 换行宽度
    this.br = conf.broad ?? conf.br ?? false // 宽幅展示
  }
  static build(conf) { return new Deco(conf) }
  static deco(x, conf) { return (new Deco(conf)).node(x) }
  static make(conf) { return Deco.prototype.node.bind(new Deco(conf)) }

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
        const th = vec.length <= 2 ? NaN : this.threshold(id)
        return this.vector(vec, th, id)
      case 2:
        return this.matrix(vec, POINTWISE, id)
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