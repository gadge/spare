import { decoFlat }                       from '@spare/deco-flat'
import { BRK }                            from '@spare/enum-brackets'
import { COSP }                           from '@texting/enum-chars'
import { ROWWISE }                        from '@vect/enum-matrix-directions'
import { LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { DecoConfig } from '@spare/deco-config'

export const CONF_DECO_MATRIX = {
  delim: COSP,
  bracket: BRK,
  read: decoFlat,
  direct: ROWWISE,
  ansi: true,
}
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
export const presetMatrix = p => DecoConfig
  .build(p)
  .replenishConfigs(CONF_DECO_MATRIX)
  .defaultPresets(NUMERIC_PRESET, LITERAL_PRESET)