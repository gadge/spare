import { COLUMNWISE } from '@vect/enum-matrix-directions'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { BRK, NONE } from '@spare/enum-brackets'
import { CO, SP } from '@spare/enum-chars'

/**
 *
 * @param {Object} [p]
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 * @param {Object} [p.preset]
 * @param {Object} [p.keyPreset]
 * @param {Object} [p.stringPreset]
 * @param {number} [p.direct=COLUMNWISE]
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRK]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 * @returns {Object}
 */
export const presetSamples = p => {
  p.indexed = p.indexed || true
  p.direct = p.direct || COLUMNWISE
  p.preset = p.preset || FRESH
  p.keyPreset = p.keyPreset || SUBTLE
  p.stringPreset = p.stringPreset || JUNGLE
  p.delim = p.delim || (CO + SP)
  p.bracket = !p.bracket ? NONE : BRK
  return p
}
