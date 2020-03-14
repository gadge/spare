import { cosmetics } from './src/cosmetics'
import { presetMatrixOptions } from '@spare/deco-util'

/***
 *
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetMatrixOptions(options))

/***
 *
 * @param {*[][]} matrix
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @returns {string}
 */
export const deco = (matrix, options = {}) => cosmetics.call(options, matrix)

