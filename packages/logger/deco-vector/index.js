import { deco as decoEntries, Deco as DecoEntries } from '@spare/deco-entries'
import { cosmetics } from './src/cosmetics'
import { presetVectorOptions } from '@spare/deco-util'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */
export const Deco = (options = {}) => options.indexed
  ? DecoEntries(presetVectorOptions(options))
  : cosmetics.bind(presetVectorOptions(options))

/***
 *
 * @param {*[]} vector
 * @param {Object} options
 * @param {boolean} [options.indexed=true]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=') ']
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */
export const deco = (vector, options = {}) =>
  options.indexed
    ? decoEntries(vector, presetVectorOptions(options))
    : cosmetics.call(presetVectorOptions(options), vector)
