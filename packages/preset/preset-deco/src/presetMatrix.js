import { decoFlat }                       from '@spare/deco-flat'
import { BRK }                            from '@spare/enum-brackets'
import { COSP }                           from '@spare/enum-chars'
import { ROWWISE }                        from '@vect/enum-matrix-directions'
import { LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { decoConfig }                     from '../utils/DecoConfig'

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
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
  p.bracket = p.bracket ?? BRK
  p.read = p.read ?? decoFlat
  p.direct = p.direct ?? ROWWISE
  // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]
  decoConfig(p, NUMERIC_PRESET, LITERAL_PRESET)
  p.ansi = p.ansi ?? true
  return p
}
