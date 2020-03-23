import { BRACE, BRACKET } from '@spare/enum-brackets'
import { COLF, SP } from '@spare/enum-chars'
import { decoKey, decoValue } from '@spare/deco-util'

/**
 * @param {Object} p
 *
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetObject = p => {
  p.dash = p.dash || (':' + SP)
  p.delim = p.delim || COLF
  p.keyRead = p.keyRead || decoKey
  p.read = p.read || decoValue
  p.bracket = BRACE
  return p
}
