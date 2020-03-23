import { BRC, NONE } from '@spare/enum-brackets'
import { CO, LF } from '@spare/enum-chars'
import { FRESH, PLANET } from '@palett/presets'

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRC]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
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
