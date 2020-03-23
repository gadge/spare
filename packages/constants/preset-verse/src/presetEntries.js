import { BRACKET, NONE } from '@spare/enum-brackets'
import { COLF, COSP, SP } from '@spare/enum-chars'
import { decoKey, decoValue } from '@spare/deco-util'

/***
 * @param {Object} p
 *
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoValue]
 * @param {Function} [p.read=decoValue]
 *
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetEntries = p => {
  p.dash = p.dash || COSP
  p.delim = p.delim || COLF
  p.keyRead = p.keyRead || decoValue
  p.read = p.read || decoValue
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
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]

 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetEntriesAsObject = p => {
  p.dash = p.dash || (':' + SP)
  p.delim = p.delim || COLF
  p.keyRead = p.keyRead || decoKey
  p.read = p.read || decoValue
  p.bracket = NONE
  p.discrete = true
  return p
}
