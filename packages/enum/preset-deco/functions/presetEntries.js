import { decoFlat }                       from '@spare/deco-flat'
import { BRK }                            from '@spare/enum-brackets'
import { LF }                             from '@texting/enum-chars'
import { LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { DecoConfig } from '@spare/deco-config'

export const CONF_DECO_ENTRIES = {
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
  .replenishConfigs(CONF_DECO_ENTRIES)
  .defaultPresets(NUMERIC_PRESET, LITERAL_PRESET)