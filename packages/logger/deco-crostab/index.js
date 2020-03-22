import { cosmetics } from './src/cosmetics'
import { presetCrostab } from '@spare/preset-deco'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Function} [options.sideRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=POINTWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delim='\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetCrostab(options))

/**
 *
 * @param {Object} crostab
 * @param {Object} options
 * @param {Function} [options.read]
 * @param {Function} [options.headRead]
 * @param {Function} [options.sideRead]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {Object} [options.labelPreset=SUBTLE]
 * @param {number} [options.direct=POINTWISE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delim='\n']
 * @param {string} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.quote] - currently not functional, keeps for future fix
 * @param {boolean} [options.ansi=true]
 * @param {boolean} [options.fullAngle]
 * @returns {string}
 */
export const deco = (crostab, options = {}) => cosmetics.call(presetCrostab(options), crostab)
