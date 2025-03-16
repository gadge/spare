import { PAL }                                    from '@spare/deco-colors'
import { decoDateTime }                           from '@spare/deco-date'
import { funcName }                               from '@spare/deco-func'
import { Node }                                   from '@spare/node'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }                    from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { mapKeyVal }                              from '@vect/object-mapper'

const { string, vector, object } = Node.prototype

export class Denode {
  presm
  depth
  width
  broad
  constructor(conf) {
    this.presm = conf.pres ?? null
    this.depth = conf.depth ?? 8     // conf.dp 更高级不展示
    this.width = conf.width ?? 80    // conf.th 换行宽度
    this.broad = conf.broad ?? false // conf.br 宽幅展示
  }
  static build(conf) { return new Denode(conf) }
  static deco(x, conf) { return (new Denode(conf)).node(x) }
  static make(conf) { return Denode.prototype.node.bind(new Denode(conf)) }

  node(x, id) {
    const t = typeof x
    if (t === STR) return isNumeric(x) ? x : this.nodeString(x, id)
    if (t === NUM || t === BIG) return x
    if (t === FUN) return funcName(x)
    if (t === OBJ) {
      const pt = typ(x)
      if (pt === ARRAY) return this.nodeVector(x, id) // |> BRK[id & 7]
      if (pt === OBJECT) return this.nodeObject(x, id) // |> BRC[id & 7]
      if (pt === DATE) return decoDateTime(x)
      return `${x}`
    }
    if (t === BOO) return PAL.BOO(x)
    if (t === UND) return PAL.UDF(x)
    if (t === SYM) return PAL.SYM(x.toString())
    return `${x}`
  }

  nodeString(str, id = 0) {
    return string.call(this.presm, str, NaN, id)
  }
  nodeVector(vec, id = 0) {
    vec = vec.map(v => this.node(v, id + 1))
    return vector.call(this.presm, vec, NaN)
  }
  nodeObject(obj, id = 0) {
    obj = mapKeyVal(obj, (k, v) => this.node(v, id + 1))
    return object.call(this.presm, obj, NaN, id)
  }
}