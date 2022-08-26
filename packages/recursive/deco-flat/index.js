import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Deco }                   from './src/Deco.js'

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE,
}

const node = Deco.prototype.node

/**
 * @param {{[depth],[vert],[width],[broad],[pres]}} p
 * @returns {function(*):string}
 */
export const DecoFlat = (p = {}) => {
  p.depth = p.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 128      // 更低位竖排列; vertically show all levels under 'vert'
  p.width = p.width ?? 512    // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false  // 宽幅展示; set if broaden view
  p.pres = p.pres ?? PRES
  return node.bind(new Deco(p))
}

/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad],[pres]}} [p]
 * @returns {string}
 */
export const decoFlat = (o, p = {}) => {
  p.depth = p.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 128      // 更低位竖排列; vertically show all levels under 'vert'
  p.width = p.width ?? 512    // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false  // 宽幅展示; set if broaden view
  p.pres = p.pres ?? PRES
  return node.call(new Deco(p), o)
}