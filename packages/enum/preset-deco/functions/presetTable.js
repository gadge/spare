import { decoFlat }                                       from '@spare/deco-flat'
import { LF }                                             from '@texting/enum-chars'
import { COLUMNWISE }                                     from '@vect/enum-matrix-directions'
import { HEADING_PRESET, LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { DecoConfig } from '@spare/deco-config'

export const CONF_DECO_TABLE = {
  delim: LF,
  read: decoFlat,
  direct: COLUMNWISE,
  ansi: true,
}
/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 *  - currently not functional, keeps for future fix
 * @param {*} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 *
 * @param {Object[]} [p.presets]
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
export const presetTable = p => DecoConfig
  .build(p)
  .replenishConfigs(CONF_DECO_TABLE)
  .defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)