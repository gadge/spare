import { BRACKET } from '@spare/enum-brackets'
import { APOS } from '@spare/enum-quotes'
import { COLF, SP } from '@spare/enum-chars'
import { smartKeyRead } from '../utils/smartKeyRead'

/**
 * @param {Object} p
 *
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=keyRead]
 * @param {Function} [p.read]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetObject = p => {
  p.keyRead = p.keyRead || smartKeyRead
  p.dash = p.dash || (':' + SP)
  p.delim = p.delim || COLF
  p.quote = p.quote ?? APOS
  p.bracket = BRACKET
  return p
}
