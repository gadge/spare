'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var decoUtil = require('@spare/deco-util');
var mattro = require('@spare/mattro');
var padMatrix = require('@spare/pad-matrix');
var fluoMatrix = require('@palett/fluo-matrix');
var matrix = require('@vect/matrix');

const cosmetics = function (matrix$1) {
  const [height, width] = matrix.size(matrix$1);
  if (!height || !width) return enumChars.AEU;
  const {
    direct,
    preset,
    stringPreset,
    quote,
    ansi,
    bracket,
    discrete
  } = this;
  let {
    delimiter
  } = this;
  this.abstract = decoUtil.makeQuoteAbstract(this.abstract, quote);
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
  const rows = padMatrix.padMatrix(text, {
    raw,
    dye,
    ansi
  });
  const lines = bracket ? rows.map(line => `[${line.join(delimiter)}]`) : rows.map(line => `${line.join(delimiter)}`);
  return discrete ? lines : bracket ? '[' + lines.join(`,${enumChars.RN} `) + ']' : lines.join(`,${enumChars.RN}`);
};

/***
 *
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(decoUtil.presetMatrixOptions(options));
/***
 *
 * @param {*[][]} matrix
 * @param {Object} options
 * @param {number} [options.direct=ROWWISE]
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset=FRESH]
 * @param {Preset} [options.stringPreset=JUNGLE]
 * @param {number} [options.top]
 * @param {number} [options.bottom]
 * @param {number} [options.left]
 * @param {number} [options.right]
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const deco = (matrix, options = {}) => cosmetics.call(decoUtil.presetMatrixOptions(options), matrix);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
