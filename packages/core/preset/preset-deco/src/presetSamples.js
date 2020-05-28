import { COSP } from '@spare/enum-chars'
import { BRK, NONE } from '@spare/enum-brackets'
import { decoFlat } from '@spare/deco-flat'
import { FRESH, JUNGLE, SUBTLE } from '@palett/presets'
import { COLUMNWISE } from '@vect/enum-matrix-directions'

/**
 *
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 * @param {*} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.colors]
 * @param {Object} [p.preset]
 * @param {Object} [p.keyPreset]
 * @param {Object} [p.stringPreset]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetSamples = p => {
  p.delim = p.delim ?? COSP
  p.bracket = !p.bracket ? NONE : BRK
  p.indexed = p.indexed || true
  p.read = p.read || decoFlat
  p.preset = p.preset ?? FRESH
  p.keyPreset = p.keyPreset ?? SUBTLE
  p.stringPreset = p.stringPreset ?? JUNGLE
  p.colors = p.colors ?? [{ preset: p.preset }, { preset: p.stringPreset }]
  p.direct = p.direct ?? COLUMNWISE
  p.ansi = p.ansi ?? true
  return p
}
