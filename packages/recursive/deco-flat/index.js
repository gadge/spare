import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets'
import { parsePresm }             from '@spare/node'
import { Denode }                 from './src/Denode.js'

const PRES = {
  str: SUBTLE,
  neg: ENSIGN,
  pos: BESQUE,
}


/**
 * @param {{[depth],[vert],[width],[broad],[pres]}} conf
 * @returns {function(*):string}
 */
export function DecoFlat(conf) {
  conf = conf ?? this ?? {}
  conf.pres = parsePresm(conf?.pres ?? conf, PRES)
  conf.depth = conf.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 128      // 更低位竖排列; vertically show all levels under 'vert'
  conf.thres = conf.width ?? NaN    // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false  // 宽幅展示; set if broaden view
  const deco = new Denode(conf)
  return deco.node.bind(deco)
}


/**
 * @param {*} obj
 * @param {{[depth],[vert],[width],[broad],[pres]}} [conf]
 * @returns {string}
 */
export function decoFlat(obj, conf) {
  conf = conf ?? this ?? {}
  conf.pres = parsePresm(conf?.pres ?? conf, PRES)
  conf.depth = conf.depth ?? 8      // 更高位不展示; only detail levels under 'depth'
  conf.vert = conf.vert ?? 128      // 更低位竖排列; vertically show all levels under 'vert'
  conf.width = conf.width ?? NaN    // 换行宽度; linefeed if line width exceeds 'width'
  conf.broad = conf.broad ?? false  // 宽幅展示; set if broaden view
  const deco = new Denode(conf)
  return deco.node(obj)
}

export { Denode }