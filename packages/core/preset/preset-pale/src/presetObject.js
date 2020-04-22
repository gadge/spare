import { COLF, RTSP } from '@spare/enum-chars'
import { BRC, NONE } from '@spare/enum-brackets'
import { decoPale } from '@spare/deco-pale'
import { FRESH, PLANET } from '@palett/presets'

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {boolean} [p.bracket=true]
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
  p.bracket = !p.bracket ? NONE : BRC
  p.read = p.read || decoPale
  p.ansi = p.ansi ?? true
  return p
}
