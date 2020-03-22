import { cosmetics } from './src/cosmetics'
import { presetVector } from '@spare/preset-deco'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {boolean} [options.discrete]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetVector(options))

/***
 *
 * @param {*[]} vector
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=JUNGLE]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {boolean} [options.discrete]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const deco = (vector, options = {}) =>
     cosmetics.call(presetVector(options), vector)
