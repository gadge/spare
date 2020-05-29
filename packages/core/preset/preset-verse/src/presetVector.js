import { decoPale } from '@spare/deco-pale'
import { BRACKET }  from '@spare/enum-brackets'
import { COSP }     from '@spare/enum-chars'

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetVector = p => {
  p.delim = p.delim ?? COSP
  p.read = p.read || decoPale
  p.bracket = BRACKET
  return p
}
