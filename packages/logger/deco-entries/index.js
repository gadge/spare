import { presetEntries } from '@spare/preset-deco'
import { cosmetics } from './src/cosmetics'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} options
 * @param {Function} [options.utils]
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=OCEAN]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {boolean} [options.discrete]
 * @param {string} [options.dash=' > ']
 * @param {string} [options.delim='\n']
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const Deco = (options = {}) => cosmetics.bind(presetEntries(options))

/***
 *
 * @param {[*,*][]} entries
 * @param {Object} options
 * @param {Function} [options.utils]
 * @param {Function} [options.read]
 * @param {Object} [options.preset=FRESH]
 * @param {Object} [options.stringPreset=OCEAN]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.keyQuote]
 * @param {string} [options.quote]
 * @param {boolean} [options.discrete]
 * @param {string} [options.dash=' > ']
 * @param {string} [options.delim='\n']
 * @param {number} [options.bracket=BRK] - BRK = 1
 * @param {boolean} [options.ansi]
 * @param {number} [options.level=0]
 * @returns {string}
 */
export const deco = (entries, options = {}) => cosmetics.call(presetEntries(options), entries)
