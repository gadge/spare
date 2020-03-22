import { cosmetics } from './src/cosmetics'
import { presetTable } from '@spare/preset-deco'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetTable(options))

/***
 *
 * @param {Object} table
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const deco = (table, options = {}) => cosmetics.call(presetTable(options), table)
