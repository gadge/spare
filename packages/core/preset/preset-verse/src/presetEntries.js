import { BRACKET, NONE } from '@spare/enum-brackets'
import { COLF, COSP, RT, RTSP, SP } from '@spare/enum-chars'
import { decoKey, decoPale } from '@spare/deco-pale'

/***
 * @param {Object} p
 *
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoPale]
 * @param {Function} [p.read=decoPale]
 *
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetEntries = p => {
  p.dash = p.dash ?? COSP
  p.delim = p.delim ?? COLF
  p.keyRead = p.keyRead || decoPale
  p.read = p.read || decoPale
  p.bracket = BRACKET
  p.discrete = true
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
 * @param {Function} [p.read=decoPale]

 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetEntriesAsObject = p => {
  p.dash = p.dash ?? RTSP
  p.delim = p.delim ?? COLF
  p.keyRead = p.keyRead || decoKey
  p.read = p.read || decoPale
  p.bracket = NONE
  p.discrete = true
  return p
}
