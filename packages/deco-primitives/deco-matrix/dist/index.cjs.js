'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var oneself = require('@ject/oneself');
var fluoMatrix = require('@palett/fluo-matrix');
var bracket = require('@spare/bracket');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var matrixMargin = require('@spare/matrix-margin');
var matrixPadder = require('@spare/matrix-padder');
var matrix = require('@vect/matrix');

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

fluoMatrix.fluoMatrix.bind(MUTATE_PIGMENT);
const _decoMatrix = function (rows = []) {
  var _Br;

  const config = this,
        [height, width] = matrix.size(rows);
  if (!height || !width) return liner.liner([], config);
  let {
    discrete,
    delim,
    bracket: bracket$1,
    level
  } = config;
  const br = (_Br = bracket.Br(bracket$1)) !== null && _Br !== void 0 ? _Br : oneself.oneself;
  rows = matrixMargin.matrixMargin(rows, config); // use: top, bottom, left, right, read, rule

  rows = matrixPadder.matrixPadder(rows, config); // use: ansi

  if (config.fluos) rows = fluoMatrix.fluoMatrix(rows, config.direct, config.fluos); // use: direct, presets, effects

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

const Deco = (p = {}) => _decoMatrix.bind(presetDeco.presetMatrix(p));
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

const deco = (matrix, p = {}) => _decoMatrix.call(presetDeco.presetMatrix(p), matrix);

exports.Deco = Deco;
exports._decoMatrix = _decoMatrix;
exports.deco = deco;
