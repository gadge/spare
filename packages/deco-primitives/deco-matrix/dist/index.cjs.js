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

const fluo = fluoMatrix.fluoMatrix.bind({
  colorant: false,
  mutate: true
});
/**
 *
 * @param {*[][]} rows
 * @param {object} config
 * @param {number} config.direct
 * @param {object|object[]} config.presets
 * @param {string[]} config.effects
 * @returns {string[][]}
 */

const matrixColour = (rows, config) => {
  if (config.presets) rows = fluo(rows, config); // use: direct, presets, effects

  return rows;
};

const cosmetics = function (rows = []) {
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

  rows = matrixColour(rows, config); // use: direct, presets, effects
  // if (config.presets) rows = fluo(rows, config) // use: direct, presets, effects

  rows = matrixPadder.matrixPadder(rows, config); // use: ansi

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
 * @param {number} [p.level=0]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetMatrix(p));
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
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (matrix, p = {}) => cosmetics.call(presetDeco.presetMatrix(p), matrix);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
