import { FRESH, OCEAN } from '@palett/presets'
import { BRK, NONE } from '@spare/enum-brackets'
import { LF } from '@spare/enum-chars'

/***
 * @param {Object} p
 * @param {Function} [p.utils]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 * @param {number} [p.head]
 * @param {number} [p.tail]
 * @param {string} [p.keyQuote]
 * @param {string} [p.quote]
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {number} [p.bracket=BRK]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
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
