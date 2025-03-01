import { decoFlat }                                       from '@spare/deco-flat'
import { LF }                                             from '@texting/enum-chars'
import { POINTWISE }                                      from '@vect/enum-matrix-directions'
import { HEADING_PRESET, LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { DecoConfig } from '@spare/deco-config'

export const CONF_DECO_CROSTAB = {
  delim: LF,
  read: decoFlat,
  ansi: true,
  direct: POINTWISE,
}

/**
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object[]} [p.presets]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetCrostab = p => {
  return DecoConfig
    .build(p)
    .replenishConfigs(CONF_DECO_CROSTAB)
    .defaultPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)
}




