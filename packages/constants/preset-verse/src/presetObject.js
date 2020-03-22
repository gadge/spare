import { BRACKET } from '@spare/enum-brackets'
import { CO, LF, QT, SP } from '@spare/enum-chars'
import { keyRead } from '../utils/keyRead'

/**
 * @param {Object} p
 * @param {Function} [p.keyRead=keyRead]
 * @param {Function} [p.read]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */
export const presetObject = p => {
  p.keyRead = p.keyRead || keyRead
  p.dash = p.dash || (':' + SP)
  p.delim = p.delim || (CO + LF)
  p.quote = p.quote || QT
  p.bracket = BRACKET
  return p
}
