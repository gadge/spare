import { liner, pipeQuote, presetMatrixOptions } from '@spare/deco-util';
import { mattro } from '@spare/mattro';
import { padMatrix } from '@spare/pad-matrix';
import { fluoMatrix } from '@palett/fluo-matrix';
import { size } from '@vect/matrix';

const bracket = x => '[' + x + ']';

const cosmetics = function (matrix) {
  if (!matrix) return String(matrix);
  const [height, width] = size(matrix);
  if (!height || !width) return liner([], this);
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
  this.abstract = pipeQuote(this.abstract, quote);
  const {
    raw,
    text
  } = mattro(matrix, this);
  const dye = preset && fluoMatrix(raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  });
  const rows = padMatrix(text, {
    raw,
    dye,
    ansi
  });
  const lines = bracket$1 ? rows.map(line => {
    var _line$join;

    return _line$join = line.join(delim), bracket(_line$join);
  }) : rows.map(line => line.join(delim));
  return liner(lines, {
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

const Deco = (options = {}) => cosmetics.bind(presetMatrixOptions(options));
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

const deco = (matrix, options = {}) => cosmetics.call(presetMatrixOptions(options), matrix);

export { Deco, cosmetics, deco };
