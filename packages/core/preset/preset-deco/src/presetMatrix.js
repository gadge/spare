import { COSP } from '@spare/enum-chars'
import { BRK, NONE } from '@spare/enum-brackets'
import { decoFlat } from '@spare/deco-flat'
import { FRESH, OCEAN } from '@palett/presets'
import { ROWWISE } from '@vect/enum-matrix-directions'

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetMatrix = p => {
  p.delim = p.delim ?? COSP
  p.bracket = !p.bracket ? NONE : BRK
  p.read = p.read || decoFlat
  p.direct = p.direct || ROWWISE
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || OCEAN
  p.ansi = p.ansi ?? true
  return p
}
