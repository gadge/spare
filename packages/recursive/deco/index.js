import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Denode }                 from './src/Denode.js'

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE
}

const node = Denode.prototype.node

/**
 * @param {{[depth],[vert],[width],[broad],[pres],[indent]}} p
 * @returns {function(*):string}
 */
export const Deco = (p = {}) => {
  p.pres = p.pres ?? PRES
  p.depth = p.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 1        // 更低位竖排列; vertically show all levels under 'vert'
  p.width = p.width ?? 80     // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false   // 宽幅展示; set if broaden view
  return node.bind(new Denode(p))
}

/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad],[pres],[indent]}} [p]
 * @returns {string}
 */
export const deco = (o, p = {}) => {
  p.pres = p.pres ?? PRES
  p.depth = p.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 1        // 更低位竖排列; vertically show all levels under 'vert'
  p.width = p.width ?? 80     // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false   // 宽幅展示; set if broaden view
  p.indent = p.indent ?? 0
  return node.call(new Denode(p), o, p.indent)
}

/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad]}} [p]
 * @returns {string}
 */
export const decoPlain = (o, p = {}) => {
  p.depth = p.depth ?? 8      // 更高级不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 1        // 更低级竖排显示; vertically show all levels under 'vert'
  p.width = p.width ?? 80     // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false  // 宽幅展示; set if broaden view
  return node.call(new Denode(p), o)
}

// this.kv = conf.unit ?? conf.kv ?? 32 // unit 值/键值对的元素宽度大于此, 则进行竖排