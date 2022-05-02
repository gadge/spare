import { decoPale } from '@spare/deco-pale'
import { BRK }      from '@spare/enum-brackets'
import { COSP }     from '@spare/enum-chars'

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetMatrix = p => {
  p.delim = p.delim ?? COSP
  p.bracket = p.bracket ?? BRK
  p.read = p.read ?? decoPale
  p.ansi = p.ansi ?? true
  return p
}
