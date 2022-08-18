import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Cate }                   from './target/Cate.js'
import { Deco as De }             from './target/Deco.js'
import { Die }                    from './target/Die.js'
import { It, Re, tabs }           from './target/Joins.js'
import { Typo }                   from './target/Typo.js'

export { Cate, De, Die, Re, It, tabs, Typo }

const DEF_PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE,
}

const node = De.prototype.node

/**
 * @param {{[depth],[vert],[width],[broad],[pres]}} p
 * @returns {function(*):string}
 */
export const Deco = (p = {}) => {
  return node.bind(new De(p))
}

/**
 * @param {*} o
 * @param {{[depth],[vert],[width],[broad],[pres]}} [p]
 * @returns {string}
 */
export const deco = (o, p = {}) => {
  p.depth = p.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  p.vert = p.vert ?? 1        // 更低位竖排列; vertically show all levels under 'vert'
  p.width = p.width ?? 80     // 换行宽度; linefeed if line width exceeds 'width'
  p.broad = p.broad ?? false   // 宽幅展示; set if broaden view
  p.pres = p.pres ?? DEF_PRES
  return node.call(new De(p), o)
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
  return node.call(new De(p), o)
}

// this.kv = conf.unit ?? conf.kv ?? 32 // unit 值/键值对的元素宽度大于此, 则进行竖排