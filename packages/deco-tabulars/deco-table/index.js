import { presetTable } from '@spare/preset-deco'
import { _decoTable }  from './src/_decoTable'

export { _decoTable }

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 *  - currently not functional, keeps for future fix
 * @param {boolean|number} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const Deco = (p = {}) => _decoTable.bind(presetTable(p))

/***
 *
 * @param {Object} table
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 *  - currently not functional, keeps for future fix
 * @param {boolean|number} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */
export const deco = (table, p = {}) => _decoTable.call(presetTable(p), table)
