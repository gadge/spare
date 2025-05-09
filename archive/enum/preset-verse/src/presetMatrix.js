import { decoPale } from '@spare/deco-pale'
import { BRACKET }  from '@spare/enum-brackets'
import { COSP }     from '@texting/enum-chars'

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 *
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetMatrix = p => {
  p.delim = p.delim ?? COSP
  p.read = p.read ?? decoPale
  p.bracket = BRACKET
  p.discrete = true
  return p
}


