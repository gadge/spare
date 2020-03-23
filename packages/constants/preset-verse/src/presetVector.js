import { BRACKET } from '@spare/enum-brackets'
import { COSP } from '@spare/enum-chars'
import { decoValue } from '@spare/deco-util'

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetVector = p => {
  p.delim = p.delim || COSP
  p.read = p.read || decoValue
  p.bracket = BRACKET
  return p
}
