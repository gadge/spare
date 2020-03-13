'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var matrix = require('@vect/matrix');
var util = require('@spare/util');
var mattro = require('@spare/mattro');
var padMatrix = require('@spare/pad-matrix');
var fluoMatrix = require('@palett/fluo-matrix');

/**
 *
 * @param {*[][]} matrix
 * @returns {string}
 */

const cosmati = function (matrix$1) {
  const [height, width] = matrix.size(matrix$1);
  if (!height || !width) return util.AEU;
  const {
    direct = matrix.ROWWISE,
    preset = presets.FRESH,
    stringPreset = presets.JUNGLE,
    delimiter = ', ',
    ansi = false
  } = this;
  const {
    raw,
    text
  } = mattro.mattro(matrix$1, this);
  const dye = preset && fluoMatrix.fluoMatrix(raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  });
  matrix$1 = padMatrix.padMatrix(text, {
    raw,
    dye,
    ansi
  }).map(line => `[${line.join(delimiter)}]`).join(`,${util.RN} `);
  return '[' + matrix$1 + ']';
};

/**
 *
 * @param {*[][]} matrix
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {number} [top=0]
 * @param {number} [left=0]
 * @param {number} [bottom=0]
 * @param {number} [right=0]
 * @param {string} [delimiter=',']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const deco = (matrix$1, {
  direct = matrix.ROWWISE,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  delimiter = ', ',
  ansi = false
} = {}) => cosmati.call({
  direct,
  abstract,
  preset,
  stringPreset,
  top,
  left,
  bottom,
  right,
  delimiter,
  ansi
}, matrix$1);

/**
 *
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {number} [top=0]
 * @param {number} [left=0]
 * @param {number} [bottom=0]
 * @param {number} [right=0]
 * @param {string} [delimiter=',']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const Deco = ({
  direct = matrix.ROWWISE,
  abstract,
  preset = presets.FRESH,
  stringPreset = presets.JUNGLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  delimiter = ', ',
  ansi = false
} = {}) => cosmati.bind({
  direct,
  abstract,
  preset,
  stringPreset,
  top,
  left,
  bottom,
  right,
  delimiter,
  ansi
});

exports.Deco = Deco;
exports.deco = deco;
