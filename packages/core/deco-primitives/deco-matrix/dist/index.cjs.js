'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fluoMatrix = require('@palett/fluo-matrix');
var bracket = require('@spare/bracket');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var mattro = require('@spare/mattro');
var padMatrix = require('@spare/pad-matrix');
var quote = require('@spare/quote');
var matrix = require('@vect/matrix');
var presetDeco = require('@spare/preset-deco');

const cosmetics = function (matrix$1) {
  if (!matrix$1) return String(matrix$1);
  const [height, width] = matrix.size(matrix$1);
  if (!height || !width) return liner.liner([], this);
  const {
    direct,
    preset,
    stringPreset,
    quote: quote$1,
    ansi,
    discrete,
    delim,
    bracket: bracket$1,
    level
  } = this;
  const {
    top,
    bottom,
    left,
    right,
    dashX,
    dashY,
    read
  } = this;
  const {
    raw,
    text
  } = mattro.mattro(matrix$1, {
    top,
    bottom,
    left,
    right,
    height,
    width,
    dashX,
    dashY,
    read: quote.Qt(read, quote$1)
  });
  const dye = preset && fluoMatrix.fluoMatrix(raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  });
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
 * @param {number} [p.quote=NONE]
 * @param {boolean} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
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
 * @param {number} [p.quote=NONE]
 * @param {boolean} [p.bracket=true]
 *
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
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
