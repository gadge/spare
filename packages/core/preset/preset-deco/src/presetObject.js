import { COLF, RTSP } from '@spare/enum-chars'
import { BRC, NONE } from '@spare/enum-brackets'
import { decoFlat } from '@spare/deco-flat'
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
 * @param {number} [p.bracket=BRC]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
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
  p.read = p.read || decoFlat
  p.preset = p.preset || FRESH
  p.stringPreset = p.stringPreset || PLANET
  p.ansi = p.ansi ?? true
  return p
}
