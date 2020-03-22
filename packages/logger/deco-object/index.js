import { presetObjectOptions } from '@spare/deco-util'
import { cosmetics } from './src/cosmetics'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} options
 * @param {function(*):string} [options.keyRead]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=': ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRC] - BRC = 2
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetObjectOptions(options))

/***
 *
 * @param {Object} o
 * @param {Object} options
 * @param {function(*):string} [options.keyRead]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=': ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRC] - BRC = 2
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const deco = (o, options = {}) => cosmetics.call(presetObjectOptions(options), o)
