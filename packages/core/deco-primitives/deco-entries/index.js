import { presetEntries } from '@spare/preset-deco'
import { cosmetics } from './src/cosmetics'

export { cosmetics }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const Deco = (p = {}) => cosmetics.bind(presetEntries(p))

/***
 *
 * @param {[*,*][]} entries
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const deco = (entries, p = {}) => cosmetics.call(presetEntries(p), entries)
