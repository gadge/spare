import { BRK, NONE } from '@spare/enum-brackets'
import { LF } from '@spare/enum-chars'
import { FRESH, OCEAN } from '@palett/presets'

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetEntries = p => {
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || OCEAN
  p.dash = p.dash || ' > '
  p.delim = p.delim || LF
  p.bracket = !p.bracket ? NONE : BRK
  return p
}
