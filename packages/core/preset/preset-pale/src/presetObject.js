import { decoPale }   from '@spare/deco-pale'
import { BRC }        from '@spare/enum-brackets'
import { COLF, RTSP } from '@spare/enum-chars'

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */
export const presetObject = p => {
  p.dash = p.dash ?? RTSP
  p.delim = p.delim ?? COLF
  p.bracket = p.bracket ?? BRC
  p.read = p.read ?? decoPale
  p.ansi = p.ansi ?? true
  return p
}
