'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@spare/util');
var mattro = require('@spare/mattro');
var padMatrix = require('@spare/pad-matrix');
var presets = require('@palett/presets');
var fluoMatrix = require('@palett/fluo-matrix');
var matrix = require('@vect/matrix');

/**
 *
 * @param {*[][]} matrix
 * @param {function(*):string} [abstract]
 * @param {string} [delimiter=',']
 * @param {number} [top]
 * @param {number} [left]
 * @param {number} [bottom]
 * @param {number} [right]
 * @param {{max:string|number[],min:string|number[],na:string|number[]}} [preset]
 * @param {number} [direct] pointwise = 0, rowwise = 1, columnwise = 2
 * @param ansi
 * @returns {string}
 */

const deco = (matrix$1, {
  abstract,
  delimiter = ', ',
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  preset = presets.FRESH,
  direct = matrix.ROWWISE,
  ansi = false
} = {}) => {
  const [height, width] = matrix.size(matrix$1);
  if (!height || !width) return util.AEU;
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
    abstract
  });
  const dye = preset && fluoMatrix.fluo(raw, {
    direct,
    preset,
    colorant: true
  });
  matrix$1 = padMatrix.padMatrix(text, {
    raw,
    dye,
    ansi
  }).map(line => `[${line.join(delimiter)}]`);
  return '[' + matrix$1.join(`,${util.RN} `) + ']';
};

exports.deco = deco;
