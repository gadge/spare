import { cosmetics }    from './src/cosmetics'
import { presetString } from './src/presetString'

export { decoCamel, decoSnake, decoPhrase } from './src/decoSpecials'

/**
 * @param {string} text
 * @param {Object} [p]
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */
export const deco = (text, p = {}) => cosmetics.call(presetString(p), text)

/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object[]} [p.presets]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */
export const Deco = (p = {}) => cosmetics.bind(presetString(p))

