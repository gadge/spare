export { decoKey }          from './src/decoKey'
import { cite }             from '@spare/cite'
import { decoPale as deco } from './src/decoPale'


const presetConfig = p => {
  p.loose = p.loose ?? true
  p.cite = p.cite ?? p.quote ?? cite
  return p
}
/**
 *
 * @param x
 * @param {Object} p
 * @param {boolean} [p.loose] numeral string to be treated as number, so quote is not applicable
 * @param {Function} [p.quote] function to deal with string
 * @return {string|*}
 */
export const decoPale = (x, p = {}) => deco.call(presetConfig(p), x)

/**
 *
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 */
export const DecoPale = (p = {}) => deco.bind(presetConfig(p))
