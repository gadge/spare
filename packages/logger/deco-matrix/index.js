import { cosmetics } from './src/cosmetics'
import { presetMatrix } from '@spare/preset-deco'

export { cosmetics }

/***
 *
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE]
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=OCEAN]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=', ']
 * @param {string} [options.quote]
 * @param {number} [options.quote]
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetMatrix(options))

/***
 *
 * @param {*[][]} matrix
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE]
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=OCEAN]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=', ']
 * @param {string} [options.quote]
 * @param {number} [options.quote]
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const deco = (matrix, options = {}) => cosmetics.call(presetMatrix(options), matrix)

