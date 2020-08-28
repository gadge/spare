import { decoPale } from '@spare/deco-pale'
import { BRK }      from '@spare/enum-brackets'
import { LF }       from '@spare/enum-chars'

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
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
  p.read = p.read ?? decoPale
  p.ansi = p.ansi ?? true
  return p
}
