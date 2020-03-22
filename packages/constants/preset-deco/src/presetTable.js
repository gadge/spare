import { COLUMNWISE } from '@vect/enum-matrix-directions'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { LF } from '@spare/enum-chars'

/***
 *
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 * @param {boolean} [p.discrete]
 * @param {boolean} [p.bracket] - currently not functional, keeps for future fix
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote] - currently not functional, keeps for future fix
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 * @returns {Object}
 */
export const presetTable = p => {
  p.direct = p.direct ?? COLUMNWISE
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || JUNGLE
  p.labelPreset = p.labelPreset || SUBTLE
  p.delim = p.delim || LF
  p.ansi = p.ansi ?? true
  return p
}
