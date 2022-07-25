import { DecoConfig }            from '@spare/deco-config'
import { TRI_PRESET_COLLECTION } from '@spare/preset-deco'
import { liner }                 from '@texting/liner'
import { acquire }               from '@vect/vector-merge'
import { zipper }                from '@vect/vector-zipper'
import { CONFIG }                from './resources/config'
import { HCONN, VLINE }          from './resources/conns.js'
import { _decoCrostab }          from './src/_decoCrostab'

export { _decoCrostab }

export class DecoCrostab {
  static simple(crostab, config) {
    const lines = acquire([
        crostab.title + VLINE + crostab.head.join(VLINE),
        crostab.rule.join(HCONN)
      ],
      zipper(
        crostab.side,
        crostab.rows, (s, r) => s + VLINE + r.join(VLINE)
      ))
    return liner(lines, config) // use: discrete, delim, level
  }
}

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object|Object[]} [p.presets=[FRESH,JUNGLE,SUBTLE]]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const Deco = (p = {}) => _decoCrostab
  .bind(DecoConfig.parse(p, CONFIG, TRI_PRESET_COLLECTION))

/**
 *
 * @param {Object} crostab
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const deco = (crostab, p = {}) => _decoCrostab
  .call(DecoConfig.parse(p, CONFIG, TRI_PRESET_COLLECTION), crostab)
