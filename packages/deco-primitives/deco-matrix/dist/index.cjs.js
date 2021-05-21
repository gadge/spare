'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoConfig = require('@spare/deco-config');
var presetDeco = require('@spare/preset-deco');
var decoFlat = require('@spare/deco-flat');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var enumMatrixDirections = require('@vect/enum-matrix-directions');
var oneself = require('@ject/oneself');
var fluoMatrix = require('@palett/fluo-matrix');
var bracket = require('@spare/bracket');
var liner = require('@spare/liner');
var matrixMargin = require('@spare/matrix-margin');
var matrixPadder = require('@spare/matrix-padder');
var matrix = require('@vect/matrix');

const CONFIG = {
  delim: enumChars.COSP,
  bracket: enumBrackets.BRK,
  read: decoFlat.decoFlat,
  direct: enumMatrixDirections.ROWWISE,
  ansi: true
};

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

const fluo = fluoMatrix.fluoMatrix.bind(MUTATE_PIGMENT);
const _decoMatrix = function (rows = []) {
  const config = this,
        [height, width] = matrix.size(rows);
  if (!height || !width) return liner.liner([], config);
  let {
    discrete,
    delim,
    bracket: bracket$1,
    level
  } = config;
  const br = bracket.Br(bracket$1) ?? oneself.oneself;
  rows = matrixMargin.matrixMargin(rows, config); // use: top, bottom, left, right, read, rule

  rows = matrixPadder.matrixPadder(rows, config); // use: ansi

  if (config.presets) rows = fluo(rows, config.direct, config.presets); // use: direct, presets, effects

  return liner.liner(rows.map(line => br(line.join(delim))), {
    discrete,
    delim: enumChars.COLF,
    bracket: bracket$1,
    level
  });
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {boolean} [p.full]
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => _decoMatrix.bind(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.DUAL_PRESET_COLLECTION));
/***
 *
 * @param {*[][]} matrix
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {boolean} [p.full]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (matrix, p = {}) => _decoMatrix.call(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.DUAL_PRESET_COLLECTION), matrix);

exports.Deco = Deco;
exports._decoMatrix = _decoMatrix;
exports.deco = deco;
