import { DecoConfig }             from '@spare/deco-config'
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco'
import { CONFIG }                 from './resources/config'
import { decoVector }             from './src/decoVector.js'

export { decoVector, decoVector as _decoVector }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string}  [p.dash=') ']
 * @param {string}  [p.delim=',\n']
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 * @param {boolean}  [p.indexed=true]
 * @param {Function} [p.read]
 * @param {Object|Object[]} [p.presets=[FRESH,JUNGLE]]
 * @param {number}  [p.head]
 * @param {number}  [p.tail]
 * @param {boolean} [p.ansi]
 * @param {number}  [p.level=0]
 *
 * @returns {Function}
 */
export const Deco = (p = {}) => decoVector
  .bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION))

/***
 *
 * @param {*[]} vector
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH,JUNGLE]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const deco = (vector, p = {}) => decoVector
  .call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), vector)

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 *
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */
export const DecoPale = (p = {}) => decoVector
  .bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION))
