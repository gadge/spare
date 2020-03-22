import { FRESH, PLANET } from '@palett/presets'
import { BRC, NONE } from '@spare/enum-brackets'
import { CO, LF } from '@spare/enum-chars'

/**
 *
 * @param {Object} p
 * @param {Function} [p.utils]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
 * @param {number} [p.head]
 * @param {number} [p.tail]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRC]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.keyQuote]
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 * @returns {Object}
 */
export const presetObject = p => {
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || PLANET
  p.dash = p.dash || ': '
  p.delim = p.delim || (CO + LF)
  p.bracket = !p.bracket ? NONE : BRC
  return p
}
