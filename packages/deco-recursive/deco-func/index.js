import { DECOFUN_CONFIG, DECOFUNC_CONFIG } from './resources/config'
import { _decoFunc }                       from './src/_decoFunc'

export { _decoFunc }

const parseConfig = p => {
  p.pr = p.pretty ?? p.pr ?? true
  p.fw = p.flatMark ?? p.fw ?? 160
  p.aw = p.abbrMark ?? p.aw ?? 192
  return p
}
/**
 * @param {Function} func
 * @param {Object} p
 * @param {boolean} [p.pretty=true]
 * @param {number} [p.flatMark=160]
 * @param {number} [p.abbrMark=192]
 * @returns {string}
 */
export const decoFunc = (func, p = DECOFUNC_CONFIG) => _decoFunc.call(parseConfig(p), func)

/**
 * @param {Object} p
 * @param {boolean} [p.pretty=true]
 * @param {number} [p.flatMark=160]
 * @param {number} [p.abbrMark=192]
 * @returns {Function}
 */
export const DecoFunc = (p = DECOFUNC_CONFIG) => _decoFunc.bind(parseConfig(p))

export { funcName } from './src/funcName'

export { argnames } from './src/argnames'

export { DECOFUN_CONFIG } from './resources/config'
