import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { parsePresm }             from '@spare/node'
import { Denode }                 from './Denode.js'

const PRES = { str: SUBTLE, neg: ENSIGN, pos: BESQUE }

const node = Denode.prototype.node

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
export function Deco(conf) {
  conf = conf ?? this ?? {}
  conf.pres = parsePresm(conf?.pres ?? conf, PRES)
  conf.depth = conf.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 1        // 更低位竖排列; vertically show all levels under 'vert'
  conf.width = conf.width ?? 80     // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false   // 宽幅展示; set if broaden view
  console.log(conf.pres, conf.pres.xdf, conf.pres.ydf, conf.pres.zdf)
  return node.bind(new Denode(conf))
}


/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad],[pres],[indent]}} [conf]
 * @returns {string}
 */
export function deco(o, conf) {
  conf = conf ?? this ?? {}
  conf.pres = parsePresm(conf?.pres ?? conf, PRES)
  conf.depth = conf.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 1        // 更低位竖排列; vertically show all levels under 'vert'
  conf.width = conf.width ?? 80     // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false   // 宽幅展示; set if broaden view
  conf.indent = conf.indent ?? 0
  return node.call(new Denode(conf), o, conf.indent)
}


/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad]}} [p]
 * @returns {string}
 */
export function decoPlain(o, p = {}) {
  p.depth = p.depth ?? 8      // 更高级不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 1        // 更低级竖排显示; vertically show all levels under 'vert'
  p.width = p.width ?? 80     // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false  // 宽幅展示; set if broaden view
  return node.call(new Denode(p), o)
}

// this.kv = conf.unit ?? conf.kv ?? 32 // unit 值/键值对的元素宽度大于此, 则进行竖排