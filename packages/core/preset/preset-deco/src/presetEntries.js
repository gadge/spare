import { decoFlat }                       from '@spare/deco-flat'
import { BRK }                            from '@spare/enum-brackets'
import { LF }                             from '@spare/enum-chars'
import { LITERAL_PRESET, NUMERIC_PRESET } from '../resources/dyePresets'

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
export const presetEntries = p => {
  p.dash = p.dash ?? ' > '
  p.delim = p.delim ?? LF
  p.bracket = p.bracket ?? BRK
  p.read = p.read ?? decoFlat
  p.presets = p.presets ?? [NUMERIC_PRESET, LITERAL_PRESET]
  p.ansi = p.ansi ?? true
  return p
}
