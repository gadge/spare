import { decoKey, decoPale } from '@spare/deco-pale'
import { BRACE }             from '@spare/enum-brackets'
import { COLF, RTSP }        from '@spare/enum-chars'

/**
 * @param {Object} p
 *
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetObject = p => {
  p.dash = p.dash ?? RTSP
  p.delim = p.delim ?? COLF
  p.keyRead = p.keyRead || decoKey
  p.read = p.read || decoPale
  p.bracket = BRACE
  return p
}
