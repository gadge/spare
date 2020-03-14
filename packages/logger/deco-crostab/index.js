import { cosmetics } from './src/cosmetics'
import { presetCrostabOptions } from '@spare/deco-util'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {function(*):string} [options.headAbstract]
 * @param {function(*):string} [options.sideAbstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {Preset} [options.labelPreset]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.fullAngle]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetCrostabOptions(options))

/**
 *
 * @param {Object} crostab
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {function(*):string} [options.headAbstract]
 * @param {function(*):string} [options.sideAbstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {Preset} [options.labelPreset=SUBTLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.fullAngle]
 * @returns {string}
 */
export const deco = (crostab, options = {}) => cosmetics.call(presetCrostabOptions(options), crostab)
