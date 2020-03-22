import { POINTWISE } from '@vect/enum-matrix-directions'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { LF } from '@spare/enum-chars'

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=POINTWISE]
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 * @param {string} [p.delim='\n']
 * @param {string} [p.quote] - currently not functional, keeps for future fix
 * @param {number} [p.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @returns {Object}
 */
export const presetCrostab = p => {
  p.direct = p.direct ?? POINTWISE
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || JUNGLE
  p.labelPreset = p.labelPreset || SUBTLE
  p.delim = p.delim || LF
  p.ansi = p.ansi ?? true
  return p
}


