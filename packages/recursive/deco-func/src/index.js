import { DECOFUN_CONFIG, DECOFUNC_CONFIG }                  from '../resources/config.js'
import { abbrev, flatten, funcToLined, prettify, toLambda } from './core.js'

export { DECOFUN_CONFIG, DECOFUNC_CONFIG }

/**
 * @param {Function} func
 * @param {Object} conf
 * @param {boolean} [conf.pretty=true]
 * @param {number} [conf.flatWd=160]
 * @param {number} [conf.abbrWd=192]
 * @returns {string}
 */
export function decoFunc(func, conf) {
  conf = conf ?? this ?? {}
  const pretty = conf.pretty ?? true
  const flatWd = conf.flatWd ?? 160
  const abbrWd = conf.abbrWd ?? 192
  let text
  text = funcToLined(func)
  text = flatten(text, flatWd)
  text = toLambda(text, pretty, func?.name)
  text = abbrev(text, abbrWd, func)
  return prettify(text, pretty)
}

/**
 * @param {Object} conf
 * @param {boolean} [conf.pretty=true]
 * @param {number} [conf.flatWd=160]
 * @param {number} [conf.abbrWd=192]
 * @returns {(func:Function) => string}
 */
export const DecoFunc = (conf = DECOFUNC_CONFIG) => decoFunc.bind(conf)

export { argnames } from './argnames.js'
export { funcName } from './funcName.js'
export { decoFunc as _decoFunc }
