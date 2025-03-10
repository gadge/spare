import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { Denode }                 from './src/Denode.js'

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE
}

/**
 * @param {{[depth],[vert],[width],[broad],[pres]}} conf
 * @returns {function(*):string}
 */
export const DecoFlat = (conf = {}) => {
  conf.depth = conf.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 128      // 更低位竖排列; vertically show all levels under 'vert'
  conf.thres = conf.width ?? NaN    // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false  // 宽幅展示; set if broaden view
  conf.pres = conf.pres ?? PRES
  const deco = new Denode(conf)
  return deco.node.bind(deco)
}

/**
 * @param {*} obj
 * @param {{[depth],[vert],[width],[broad],[pres]}} [conf]
 * @returns {string}
 */
export const decoFlat = (obj, conf = {}) => {
  conf.depth = conf.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 128      // 更低位竖排列; vertically show all levels under 'vert'
  conf.width = conf.width ?? NaN    // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false  // 宽幅展示; set if broaden view
  conf.pres = conf.pres ?? PRES
  const deco = new Denode(conf)
  return deco.node(obj)
}

export { Denode }