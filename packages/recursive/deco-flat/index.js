import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets';
import { Node, parsePresm } from '@spare/node';
import { PAL } from '@spare/deco-colors';
import { decoDateTime } from '@spare/deco-date';
import { funcName } from '@spare/deco-func';
import { STR, NUM, BIG, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { mapKeyVal } from '@vect/object-mapper';

const { string, vector, object } = Node.prototype;

class Denode {
  presm
  depth
  width
  broad
  constructor(conf) {
    this.presm = conf.pres ?? null;
    this.depth = conf.depth ?? 8;     // conf.dp 更高级不展示
    this.width = conf.width ?? 80;    // conf.th 换行宽度
    this.broad = conf.broad ?? false; // conf.br 宽幅展示
  }
  static build(conf) { return new Denode(conf) }
  static deco(x, conf) { return (new Denode(conf)).node(x) }
  static make(conf) { return Denode.prototype.node.bind(new Denode(conf)) }

  node(x, id) {
    const t = typeof x;
    if (t === STR) return isNumeric(x) ? x : this.nodeString(x, id)
    if (t === NUM || t === BIG) return x
    if (t === FUN) return funcName(x)
    if (t === OBJ) {
      const pt = typ(x);
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
    vec = vec.map(v => this.node(v, id + 1));
    return vector.call(this.presm, vec, NaN)
  }
  nodeObject(obj, id = 0) {
    obj = mapKeyVal(obj, (k, v) => this.node(v, id + 1));
    return object.call(this.presm, obj, NaN, id)
  }
}

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE,
};


/**
 * @param {{[depth],[vert],[width],[broad],[pres]}} conf
 * @returns {function(*):string}
 */
function DecoFlat(conf) {
  conf = conf ?? this ?? {};
  conf.pres = parsePresm(conf?.pres ?? conf, PRES);
  conf.depth = conf.depth ?? 8;      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 128;      // 更低位竖排列; vertically show all levels under 'vert'
  conf.thres = conf.width ?? NaN;    // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false;  // 宽幅展示; set if broaden view
  const deco = new Denode(conf);
  return deco.node.bind(deco)
}


/**
 * @param {*} obj
 * @param {{[depth],[vert],[width],[broad],[pres]}} [conf]
 * @returns {string}
 */
function decoFlat(obj, conf) {
  conf = conf ?? this ?? {};
  conf.pres = parsePresm(conf?.pres ?? conf, PRES);
  conf.depth = conf.depth ?? 8;      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 128;      // 更低位竖排列; vertically show all levels under 'vert'
  conf.width = conf.width ?? NaN;    // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false;  // 宽幅展示; set if broaden view
  const deco = new Denode(conf);
  return deco.node(obj)
}

export { DecoFlat, Denode, decoFlat };
