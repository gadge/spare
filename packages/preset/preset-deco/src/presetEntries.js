import { decoFlat }                       from '@spare/deco-flat'
import { BRK }                            from '@spare/enum-brackets'
import { LF }                             from '@spare/enum-chars'
import { LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { DecoConfig }                     from './DecoConfig'

const CONF_DECO_ENTRIES = {
  dash: ' > ',
  delim: LF,
  bracket: BRK,
  read: decoFlat,
  ansi: true,
}
/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 *
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.presets]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetEntries = p => DecoConfig
  .build(p)
  .assignConfigs(CONF_DECO_ENTRIES)
  .assignPresets(NUMERIC_PRESET, LITERAL_PRESET)

// p.dash = p.dash ?? ' > '
// p.delim = p.delim ?? LF
// p.bracket = p.bracket ?? BRK
// p.read = p.read ?? decoFlat
// p.ansi = p.ansi ?? true
// // p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]
// DecoConfig.prototype.assignPresets.call(p, NUMERIC_PRESET, LITERAL_PRESET)
// return p
