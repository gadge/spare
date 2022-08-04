import { DecoConfig }             from '@spare/deco-config'
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco'
import { CONFIG }                 from './resources/config'
import { decoMatrix }             from './src/decoMatrix.js'

export { decoMatrix, decoMatrix as _decoMatrix }

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {boolean} [p.full]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */
export const Deco = (p = {}) => decoMatrix
  .bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION))

/***
 *
 * @param {*[][]} matrix
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {boolean} [p.full]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const deco = (matrix, p = {}) => decoMatrix
  .call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), matrix)

