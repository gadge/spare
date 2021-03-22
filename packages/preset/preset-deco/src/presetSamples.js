import { decoFlat }                                       from '@spare/deco-flat'
import { BRK }                                            from '@spare/enum-brackets'
import { COSP }                                           from '@spare/enum-chars'
import { COLUMNWISE }                                     from '@vect/enum-matrix-directions'
import { DecoConfig }                                     from '../dist/index.esm'
import { HEADING_PRESET, LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'

export const CONF_DECO_SAMPLES = {
  delim: COSP,
  bracket: BRK,
  indexed: true,
  read: decoFlat,
  direct: COLUMNWISE,
  ansi: true,
}
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
export const presetSamples = p => DecoConfig
  .build(p)
  .assignConfigs(CONF_DECO_SAMPLES)
  .assignPresets(NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)

// p.delim = p.delim ?? COSP
// p.bracket = p.bracket ?? BRK
// p.indexed = p.indexed ?? true
// p.read = p.read ?? decoFlat
// p.direct = p.direct ?? COLUMNWISE
// p.ansi = p.ansi ?? true
// return p
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET]
// DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET)
