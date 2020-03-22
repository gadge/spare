import { presetEntriesOptions } from '@spare/deco-util'
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
 * @param {string} [options.dash=' > ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @param {number} [options.level]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetEntriesOptions(options))

/***
 *
 * @param {[*,*][]} entries
 * @param {Object} options
 * @param {function(*):string} [options.keyRead]
 * @param {function(*):string} [options.read]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=' > ']
 * @param {string} [options.delim='\n']
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const deco = (entries, options = {}) => cosmetics.call(presetEntriesOptions(options), entries)
