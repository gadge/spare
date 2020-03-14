import { cosmetics } from './cosmetics'
import { presetEntriesOptions } from '../../deco-util/src/presetEntriesOptions'

/***
 *
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 *
 * @param {Object} options
 * @param {function(*):string} [options.keyAbstract]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.head]
 * @param {number} [options.tail]
 * @param {string} [options.dash=' > ']
 * @param {string} [options.delimiter='\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @returns {string}
 */
export const Deco = (options   = {}) => cosmetics.bind(presetEntriesOptions(options))


