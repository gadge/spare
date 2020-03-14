import { cosmetics } from './src/cosmetics'
import { presetSamplesOptions } from '@spare/deco-util'

export { cosmetics }

/**
 *
 * @param {Object} [options]
 * @param {*[]} [options.fields]
 * @param {boolean} [options.indexed=true]
 * @param {number} [options.direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.keyPreset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.top=0]
 * @param {number} [options.left=0]
 * @param {number} [options.bottom=0]
 * @param {number} [options.right=0]
 * @param {string} [options.delimiter=',']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetSamplesOptions(options))

/**
 *
 * @param {*[][]} samples
 * @param {Object} [options]
 * @param {*[]} [options.fields]
 * @param {boolean} [options.indexed=true]
 * @param {number} [options.direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.keyPreset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.top=0]
 * @param {number} [options.left=0]
 * @param {number} [options.bottom=0]
 * @param {number} [options.right=0]
 * @param {string} [options.delimiter=',']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */
export const deco = (samples, options = {}) => cosmetics.call(presetSamplesOptions(options), samples)
