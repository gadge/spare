'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoUtil = require('@spare/deco-util');
var mattro = require('@spare/mattro');
var padMatrix = require('@spare/pad-matrix');
var fluoMatrix = require('@palett/fluo-matrix');
var matrix = require('@vect/matrix');

const bracket = x => '[' + x + ']';

const cosmetics = function (matrix$1) {
  if (!matrix$1) return String(matrix$1);
  const [height, width] = matrix.size(matrix$1);
  if (!height || !width) return decoUtil.liner([], this);
  const {
    direct,
    preset,
    stringPreset,
    quote,
    ansi,
    discrete,
    delim,
    bracket: bracket$1,
    level
  } = this;
  this.abstract = decoUtil.pipeQuote(this.abstract, quote);
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
  const lines = bracket$1 ? rows.map(line => {
    var _line$join;

    return _line$join = line.join(delim), bracket(_line$join);
  }) : rows.map(line => line.join(delim));
  return decoUtil.liner(lines, {
    discrete,
    delim: ',\n',
    bracket: bracket$1,
    level
  });
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
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
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
 * @param {string} [options.delim=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (matrix, options = {}) => cosmetics.call(decoUtil.presetMatrixOptions(options), matrix);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
