import { _decoString }                      from './src/_decoString'
import { decoCamel, decoPhrase, decoSnake } from './src/decoSpecials'
import { presetString }                     from './src/presetString'

export { decoCamel, decoSnake, decoPhrase }
export { _decoString }
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
export const deco = (text, p = {}) => _decoString.call(presetString(p), text)

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
export const Deco = (p = {}) => _decoString.bind(presetString(p))

