import { decoFlat }                                       from '@spare/deco-flat'
import { BRK }                                            from '@spare/enum-brackets'
import { COSP }                                           from '@spare/enum-chars'
import { COLUMNWISE }                                     from '@vect/enum-matrix-directions'
import { HEADING_PRESET, LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'

/**
 *
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {*} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetSamples = p => {
  p.delim = p.delim ?? COSP
  p.bracket = p.bracket ?? BRK
  p.indexed = p.indexed ?? true
  p.read = p.read ?? decoFlat
  p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
  p.direct = p.direct ?? COLUMNWISE
  p.ansi = p.ansi ?? true
  return p
}
