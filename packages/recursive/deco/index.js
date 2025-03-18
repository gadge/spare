import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets';
import { Node, parsePresm } from '@spare/node';
import { PAL } from '@spare/deco-colors';
import { decoDate, decoDateTime } from '@spare/deco-date';
import { funcName, decoFunc } from '@spare/deco-func';
import { STR, NUM, BIG, FUN, OBJ, BOO, UND, SYM } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE, SET } from '@typen/enum-object-types';
import { isNumeric } from '@typen/num-loose';
import { typ } from '@typen/typ';
import { POINTWISE } from '@vect/enum-matrix-directions';
import { mapKeyVal } from '@vect/object-mapper';
import { isVector } from '@vect/vector-index';

function depth(node) {
  let d = 0;
  while (true) {
    if (isVector(node)) { [ node ] = node, d++; } else { return d }
  }
}

function isMatrix(list) {
  const hi = list.length, wd = list[0].length;
  for (let i = 0, row; i < hi; i++) {
    if ((row = list[i]).length !== wd) return false
  }
  return true
}

const { string, vector, object, matrix } = Node.prototype;

class Denode {
  depth
  vert
  width
  broad
  constructor(conf) {
    this.presm = conf.pres ?? null;
    this.depth = conf.depth ?? 8;     //  conf.dp 更高级不展示
    this.vert = conf.vert ?? 1;      //  conf.vt 更低级竖排显示
    this.width = conf.thres ?? 80;    //  conf.th 换行宽度
    this.broad = conf.broad ?? false; //  conf.br 宽幅展示
  }
  static build(conf) { return new Denode(conf) }
  static deco(x, conf) { return (new Denode(conf)).node(x) }
  static make(conf) { return Denode.prototype.node.bind(new Denode(conf)) }

  node(x, ind = 0, sur = 0) {
    const t = typeof x;
    if (t === STR) return isNumeric(x) ? x : this.nodeString(x, ind, sur)
    if (t === NUM || t === BIG) return x
    if (t === FUN) return (ind >> 1) >= this.depth ? funcName(x) : decoFunc(x, this)
    if (t === OBJ) {
      const { depth } = this, pt = typ(x);
      if (pt === ARRAY) return (ind >> 1) >= depth ? '[array]' : this.nodeVector(x, ind)
      if (pt === OBJECT) return (ind >> 1) >= depth ? '{object}' : this.nodeObject(x, ind)
      if (pt === DATE) return (ind >> 1) >= depth ? decoDate(x) : decoDateTime(x)
      // if (pt === MAP) return lv >= depth ? '(map)' : this.entries([ ...x.entries() ], lv)
      if (pt === SET) return (ind >> 1) >= depth ? '(set)' : `set:${this.nodeVector([ ...x ], ind)}`
      return `${x}`
    }
    if (t === BOO) return PAL.BOO(x)
    if (t === UND) return PAL.UDF(x)
    if (t === SYM) return PAL.UDF(x.toString())
    return `${x}`
  }

  threshold(id) { return (id >> 1) < this.vert ? 0 : this.width }
  nodeString(str, id = 0, sr) {
    return string.call(this.presm, str, this.width, this.broad ? id : id + 2, sr)
  }
  nodeVector(vec, id = 0) {
    switch (depth(vec)) {
      case 0:
        return '[]'
      case 1:
        vec = vec.map(v => this.node(v, id + 2));
        const wd = vec.length <= 2 ? NaN : this.threshold(id);
        return vector.call(this.presm, vec, wd, id)
      case 2:
        if (isMatrix(vec)) return matrix.call(this.presm, vec, POINTWISE, id)
      // CRUCIAL: else fall through default
      default:
        vec = vec.map(v => this.node(v, id + 1));
        return vector.call(this.presm, vec, NaN)
    }
  }
  nodeObject(obj, id = 0) {
    obj = mapKeyVal(obj, (k, v) => {
      const sr = id + 2 + k.length + 2;
      const nx = this.broad
        ? sr >= (this.width >> 1) ? (id + 4) : sr
        : id + 2;
      return this.node(v, nx, sr) // nx could also be id+2, alternatively
    });
    return object.call(this.presm, obj, this.threshold(id), id)
  }
}

const PRES = { str: SUBTLE, neg: ENSIGN, pos: BESQUE };

const node = Denode.prototype.node;

// function parsePresm(o, pres) {
//   if (typeof o === STR && o.startsWith('#')) { return Presm.build(o = randPres(o), o) } // string -> make presm
//   if (typeof o === OBJ) {
//     if (o instanceof Pres) return Presm.build(o, o) // pres -> make presm
//     if (o instanceof Presm) return o // presm -> pass presm
//     const str = o.str, pos = o.num ?? o.pos, neg = o.neg, nan = o.nan;
//     if (str || pos || neg) return Presm.build(parsePres(str), parsePres(pos), parsePres(neg), nan) // {str, pos, neg} -> make presm
//   }
//   if (pres) return Presm.build(o, o) // if nothing found, use default pres
//   return null // if nothing found and default pres not provided, return null
// }


/**
 * @param {{[depth],[vert],[width],[broad],[pres],[indent]}} conf
 * @returns {(x:*)=>string}
 */
function Deco(conf) {
  conf = conf ?? this ?? {};
  conf.pres = parsePresm(conf?.pres ?? conf, PRES);
  conf.depth = conf.depth ?? 8;      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 1;        // 更低位竖排列; vertically show all levels under 'vert'
  conf.width = conf.width ?? 80;     // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false;   // 宽幅展示; set if broaden view
  console.log(conf.pres, conf.pres.xdf, conf.pres.ydf, conf.pres.zdf);
  return node.bind(new Denode(conf))
}


/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad],[pres],[indent]}} [conf]
 * @returns {string}
 */
function deco(o, conf) {
  conf = conf ?? this ?? {};
  conf.pres = parsePresm(conf?.pres ?? conf, PRES);
  conf.depth = conf.depth ?? 8;      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 1;        // 更低位竖排列; vertically show all levels under 'vert'
  conf.width = conf.width ?? 80;     // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false;   // 宽幅展示; set if broaden view
  conf.indent = conf.indent ?? 0;
  return node.call(new Denode(conf), o, conf.indent)
}


/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad]}} [p]
 * @returns {string}
 */
function decoPlain(o, p = {}) {
  p.depth = p.depth ?? 8;      // 更高级不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 1;        // 更低级竖排显示; vertically show all levels under 'vert'
  p.width = p.width ?? 80;     // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false;  // 宽幅展示; set if broaden view
  return node.call(new Denode(p), o)
}

// this.kv = conf.unit ?? conf.kv ?? 32 // unit 值/键值对的元素宽度大于此, 则进行竖排

export { Deco, deco, decoPlain };
