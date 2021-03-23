'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var fluoMatrix = require('@palett/fluo-matrix');
var fluoVector = require('@palett/fluo-vector');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var tableMargin = require('@spare/table-margin');
var tablePadder = require('@spare/table-padder');
var matrix = require('@vect/matrix');
var vectorMerge = require('@vect/vector-merge');

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

const _decoTable = function (table) {
  var _head;

  const config = this;
  if (!table) return enumChars.AEU;
  let head = table.head || table.banner,
      rows = table.rows || table.matrix,
      rule = null;
  const [height, width] = matrix.size(rows),
        labelWidth = (_head = head) === null || _head === void 0 ? void 0 : _head.length;
  if (!height || !width || !labelWidth) return enumChars.AEU;
  table = tableMargin.tableMargin(table, config); // use: top, left, bottom ,right, read, headRead

  ({
    head,
    rule,
    rows
  } = tablePadder.tablePadder(table, config)); // use: ansi, fullAngle

  const {
    fluos
  } = config; // fluos |> deco |> logger

  if (fluos) {
    [head, rows] = [fluoVector.fluoVector.call(MUTATE_PIGMENT, head, [fluos[0], fluos[2]]), fluoMatrix.fluoMatrix.call(MUTATE_PIGMENT, rows, config.direct, fluos)];
  }

  const lines = vectorMerge.acquire([head.join(' | '), rule.join('-+-')], rows.map(row => row.join(' | ')));
  return liner.liner(lines, config); // use: discrete, delim, level
};

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

const Deco = (p = {}) => _decoTable.bind(presetDeco.presetTable(p));
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

const deco = (table, p = {}) => _decoTable.call(presetDeco.presetTable(p), table);

exports.Deco = Deco;
exports._decoTable = _decoTable;
exports.deco = deco;
