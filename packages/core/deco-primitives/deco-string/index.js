import { cosmetics }                        from './src/cosmetics'
import { decoCamel, decoPhrase, decoSnake } from './src/decoSpecials'
import { presetString }                     from './src/presetString'

export { decoCamel, decoSnake, decoPhrase }
export { cosmetics }
/**
 * @param {string} text
 * @param {Object} [p]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */
export const deco = (text, p = {}) => cosmetics.call(presetString(p), text)

/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {number} [p.width=80]
 * @param {number} [p.indent]
 * @param {number} [p.firstLineIndent]
 * @param {Object[]} [p.presets]
 * @param {string[]} [p.effects]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {Function}
 */
export const Deco = (p = {}) => cosmetics.bind(presetString(p))

