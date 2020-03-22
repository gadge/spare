import { ROWWISE } from '@vect/enum-matrix-directions'
import { FRESH, OCEAN } from '@palett/presets'
import { BRK, NONE } from '@spare/enum-brackets'
import { CO, SP } from '@spare/enum-chars'

/***
 *
 * @param {Object} p
 * @param {number} [p.direct=ROWWISE]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRK]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 * @returns {Object}
 */
export const presetMatrix = p => {
  p.direct = p.direct || ROWWISE
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || OCEAN
  p.delim = p.delim || (CO + SP)
  p.bracket = !p.bracket ? NONE : BRK
  return p
}
