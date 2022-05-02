import { DecoConfig }             from '@spare/deco-config'
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco'
import { CONFIG }                 from './resources/config'
import { _decoObject }            from './src/_decoObject'

export { _decoObject }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 *
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object[]} [p.presets=[FRESH,PLANET]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
 * @returns {Function}
 */
export const Deco = (p = {}) => _decoObject
  .bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION))

/***
 *
 * @param {Object} o
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 *
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object[]|*} [p.presets=[FRESH,PLANET]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
 * @returns {string}
 */
export const deco = (o, p = {}) => _decoObject
  .call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), o)
