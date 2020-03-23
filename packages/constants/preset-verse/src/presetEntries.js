import { BRACKET, NONE } from '@spare/enum-brackets'
import { COLF, COSP, SP } from '@spare/enum-chars'
import { smartKeyRead } from '../utils/smartKeyRead'
import { smartValueRead } from '../utils/smartValueRead'

/***
 * @param {Object} p
 *
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=smartValueRead]
 * @param {Function} [p.read=smartValueRead]
 *
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetEntries = p => {
  p.dash = p.dash || COSP
  p.delim = p.delim || COLF
  p.keyRead = p.keyRead || smartValueRead
  p.read = p.read || smartValueRead
  p.bracket = BRACKET
  p.discrete = true;
  return p
}

/***
 * @param {Object} p
 *
 * @param {number} [p.keyQuote]
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=smartKeyRead]
 * @param {Function} [p.read=smartValueRead]

 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetEntriesAsObject = p => {
  p.dash = p.dash || (':' + SP)
  p.delim = p.delim || COLF
  p.keyRead = p.keyRead || smartKeyRead
  p.read = p.read || smartValueRead
  p.bracket = NONE
  p.discrete = true
  return p
}
