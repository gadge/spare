import { BRACKET, NONE } from '@spare/enum-brackets'
import { CO, LF, QT, SP } from '@spare/enum-chars'
import { keyRead } from '../utils/keyRead'

/***
 * @param {Object} p
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 * @param {string} [p.keyQuote]
 * @param {string} [p.quote='\'']
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 * @returns {Object}
 */
export const presetEntries = p => {
  p.quote = p.quote || QT
  p.dash = p.dash || (CO + SP)
  p.delim = p.delim || (CO + LF)
  p.bracket = BRACKET
  return p
}

/***
 * @param {Object} p
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 * @param {string} [p.keyQuote]
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote='\'']
 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 * @returns {Object}
 */
export const presetEntriesAsObject = p => {
  p.keyRead = keyRead
  p.dash = p.dash || (':' + SP)
  p.delim = p.delim || (CO + LF)
  p.quote = p.quote || QT
  p.bracket = NONE
  p.discrete = true
  return p
}
