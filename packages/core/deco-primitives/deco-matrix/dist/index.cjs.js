'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var enumColorantModes = require('@palett/enum-colorant-modes');
var fluoMatrix = require('@palett/fluo-matrix');
var bracket = require('@spare/bracket');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var mattro = require('@spare/mattro');
var padMatrix = require('@spare/pad-matrix');
var matrix = require('@vect/matrix');

const cosmetics = function (matrix$1) {
  if (!matrix$1) return String(matrix$1);
  const [height, width] = matrix.size(matrix$1);
  if (!height || !width) return liner.liner([], this);
  const config = this;
  const {
    direct,
    presets,
    ansi,
    discrete,
    delim,
    bracket: bracket$1,
    level
  } = config;
  const {
    raw,
    text
  } = mattro.mattro(matrix$1, Object.assign(config, {
    height,
    width
  }) // { top, bottom, left, right, dashX, dashY, read } = config
  );
  let dye = undefined;

  if (presets) {
    dye = fluoMatrix.fluoMatrix.call(enumColorantModes.COLORANT, raw, direct, presets);
  }

  const rows = padMatrix.padMatrix(text, {
    raw,
    dye,
    ansi
  });
  const lines = bracket$1 ? rows.map(line => {
    var _line$join;

    return _line$join = line.join(delim), bracket.bracket(_line$join);
  }) : rows.map(line => line.join(delim));
  return liner.liner(lines, {
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
