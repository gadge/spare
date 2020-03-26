import { LF } from '@spare/enum-chars'
import { decoFlat } from '@spare/deco-flat'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { COLUMNWISE } from '@vect/enum-matrix-directions'

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE] - currently not functional, keeps for future fix
 * @param {boolean} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetTable = p => {
  p.delim = p.delim || LF
  p.read = p.read || decoFlat
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || JUNGLE
  p.labelPreset = p.labelPreset || SUBTLE
  p.direct = p.direct ?? COLUMNWISE
  p.ansi = p.ansi ?? true
  return p
}
