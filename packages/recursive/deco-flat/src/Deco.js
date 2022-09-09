import { Typo }                                   from '@spare/deco'
import { PAL }                                    from '@spare/deco-colors'
import { decoDateTime }                           from '@spare/deco-date'
import { funcName }                               from '@spare/deco-func'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT }                    from '@typen/enum-object-types'
import { isNumeric }                              from '@typen/num-loose'
import { typ }                                    from '@typen/typ'
import { mapKeyVal }                              from '@vect/object-mapper'

export class Deco extends Typo {
  dp
  th
  br
  constructor(conf) {
    super(conf)
    this.dp = conf.depth ?? conf.dp ?? 8     // 更高级不展示
    this.th = conf.width ?? conf.th ?? 80    // 换行宽度
    this.br = conf.broad ?? conf.br ?? false // 宽幅展示
  }
  static build(conf) { return new Deco(conf) }
  static deco(x, conf) { return (new Deco(conf)).node(x) }
  static make(conf) { return Deco.prototype.node.bind(new Deco(conf)) }

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
    return this.string(NaN, str, id)
  }
  nodeVector(vec, id = 0) {
    vec = vec.map(v => this.node(v, id + 1))
    return this.vector(NaN, vec)
  }
  nodeObject(obj, id = 0) {
    obj = mapKeyVal(obj, (k, v) => this.node(v, id + 1))
    return this.object(NaN, obj, id)
  }
}