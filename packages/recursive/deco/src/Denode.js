import { PAL }                                    from '@spare/deco-colors'
import { decoDate, decoDateTime }                 from '@spare/deco-date'
import { decoFunc, funcName }                     from '@spare/deco-func'
import { Node }                                   from '@spare/node'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT, SET }               from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { POINTWISE }                              from '@vect/enum-matrix-directions'
import { mapKeyVal }                              from '@vect/object-mapper'
import { isVector }                               from '@vect/vector-index'

export function depth(node) {
  let d = 0
  while (true) {
    if (isVector(node)) { [ node ] = node, d++ } else { return d }
  }
}

export function isMatrix(list) {
  const hi = list.length, wd = list[0].length
  for (let i = 0, row; i < hi; i++) {
    if ((row = list[i]).length !== wd) return false
  }
  return true
}

export class Denode extends Node {
  depth
  vert
  width
  broad
  constructor(conf) {
    super(conf)
    this.depth = conf.depth ?? conf.dp ?? 8     // 更高级不展示
    this.vert = conf.vert ?? conf.vt ?? 1      // 更低级竖排显示
    this.width = conf.thres ?? conf.width ?? conf.th ?? 80    // 换行宽度
    this.broad = conf.broad ?? conf.br ?? false // 宽幅展示
  }
  static build(conf) { return new Denode(conf) }
  static deco(x, conf) { return (new Denode(conf)).node(x) }
  static make(conf) { return Denode.prototype.node.bind(new Denode(conf)) }

  node(x, id = 0, sr = 0) {
    const t = typeof x
    if (t === STR) return isNumeric(x) ? x : this.nodeString(x, id, sr)
    if (t === NUM || t === BIG) return x
    if (t === FUN) return (id >> 1) >= this.depth ? funcName(x) : decoFunc(x, this)
    if (t === OBJ) {
      const { depth } = this, pt = typ(x)
      if (pt === ARRAY) return (id >> 1) >= depth ? '[array]' : this.nodeVector(x, id)
      if (pt === OBJECT) return (id >> 1) >= depth ? '{object}' : this.nodeObject(x, id)
      if (pt === DATE) return (id >> 1) >= depth ? decoDate(x) : decoDateTime(x)
      // if (pt === MAP) return lv >= depth ? '(map)' : this.entries([ ...x.entries() ], lv)
      if (pt === SET) return (id >> 1) >= depth ? '(set)' : `set:${this.nodeVector([ ...x ], id)}`
      return `${x}`
    }
    if (t === BOO) return PAL.BOO(x)
    if (t === UND) return PAL.UDF(x)
    if (t === SYM) return PAL.UDF(x.toString())
    return `${x}`
  }

  threshold(id) { return (id >> 1) < this.vert ? 0 : this.width }
  nodeString(str, id = 0, sr) {
    return this.string(str, this.width, this.broad ? id : id + 2, sr)
  }
  nodeVector(vec, id = 0) {
    switch (depth(vec)) {
      case 0:
        return '[]'
      case 1:
        vec = vec.map(v => this.node(v, id + 2))
        const wd = vec.length <= 2 ? NaN : this.threshold(id)
        return this.vector(vec, wd, id)
      case 2:
        if (isMatrix(vec)) return this.matrix(vec, POINTWISE, id)
      // CRUCIAL: else fall through default
      default:
        vec = vec.map(v => this.node(v, id + 1))
        return this.vector(vec, NaN)
    }
  }
  nodeObject(obj, id = 0) {
    obj = mapKeyVal(obj, (k, v) => {
      const sr = id + 2 + k.length + 2
      const nx = this.broad
        ? sr >= (this.width >> 1) ? (id + 4) : sr
        : id + 2
      return this.node(v, nx, sr) // nx could also be id+2, alternatively
    })
    return this.object(obj, this.threshold(id), id)
  }
}