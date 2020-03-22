import { cosmetics } from './src/cosmetics'
import { presetSamples } from '@spare/preset-deco'

export { cosmetics }

/**
 *
 * @param {Object} [options]
 * @param {*[]} [options.fields]
 * @param {boolean} [options.indexed=true]
 * @param {Function} [options.read]
 * @param {Object} [options.preset]
 * @param {Object} [options.keyPreset]
 * @param {Object} [options.stringPreset]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.left]
 * @param {number} [options.bottom]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {number} [options.bracket=BRK]
 * @param {string} [options.delim=', ']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetSamples(options))

/**
 *
 * @param {*[][]} samples
 * @param {Object} [options]
 * @param {*[]} [options.fields]
 * @param {boolean} [options.indexed=true]
 * @param {Function} [options.read]
 * @param {Object} [options.preset]
 * @param {Object} [options.keyPreset]
 * @param {Object} [options.stringPreset]
 * @param {number} [options.direct=COLUMNWISE]
 * @param {number} [options.top]
 * @param {number} [options.left]
 * @param {number} [options.bottom]
 * @param {number} [options.right]
 * @param {boolean} [options.discrete]
 * @param {number} [options.bracket=BRK]
 * @param {string} [options.delim=', ']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const deco = (samples, options = {}) => cosmetics.call(presetSamples(options), samples)
