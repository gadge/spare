import { FRESH, JUNGLE } from '@palett/presets'
import { BRK, NONE } from '@spare/enum-brackets'
import { CO, LF } from '@spare/enum-chars'

/***
 *
 * @param {Object} p
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {number} [p.head]
 * @param {number} [p.tail]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRK] - BRK = 1
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 * @returns {Object}
 */
export const presetVector = p => {
  p.indexed = p.indexed ?? true
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || JUNGLE
  p.dash = p.dash || ') '
  p.delim = p.delim || (CO + LF)
  p.bracket = !p.bracket ? NONE : BRK
  return p
}
