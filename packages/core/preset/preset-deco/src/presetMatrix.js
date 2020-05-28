import { FRESH, METRO, OCEAN, PLANET } from '@palett/presets'
import { decoFlat }                    from '@spare/deco-flat'
import { BRK, NONE }    from '@spare/enum-brackets'
import { COSP }         from '@spare/enum-chars'
import { ROWWISE }      from '@vect/enum-matrix-directions'

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 * @param {*} [p.bracket=true]
 *
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.colors]
 * @param {Object} [p.preset=FRESH] - will be deprecated
 * @param {Object} [p.stringPreset=OCEAN] - will be deprecated
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */
export const presetMatrix = p => {
  p.delim = p.delim ?? COSP
  p.bracket = !p.bracket ? NONE : BRK
  p.read = p.read || decoFlat
  p.direct = p.direct ?? ROWWISE
  p.preset = p.preset ?? PLANET
  p.stringPreset = p.stringPreset ?? METRO
  p.colors = p.colors ?? [{ preset: p.preset }, { preset: p.stringPreset }]
  p.ansi = p.ansi ?? true
  return p
}
