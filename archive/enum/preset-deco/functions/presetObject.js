import { decoFlat }                       from '@spare/deco-flat'
import { BRC }                            from '@spare/enum-brackets'
import { COLF, RTSP }                     from '@texting/enum-chars'
import { LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'
import { DecoConfig } from '@spare/deco-config'

export const CONF_DECO_OBJECT = {
  dash: RTSP,
  delim: COLF,
  bracket: BRC,
  read: decoFlat,
  ansi: true,
}
/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 *
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.presets]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetObject = p => DecoConfig
  .build(p)
  .replenishConfigs(CONF_DECO_OBJECT)
  .defaultPresets(NUMERIC_PRESET, LITERAL_PRESET)