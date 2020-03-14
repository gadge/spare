import { AEU, RN } from '@spare/enum-chars';
import { makeQuoteAbstract, presetMatrixOptions } from '@spare/deco-util';
import { mattro } from '@spare/mattro';
import { padMatrix } from '@spare/pad-matrix';
import { fluoMatrix } from '@palett/fluo-matrix';
import { size } from '@vect/matrix';

const cosmetics = function (matrix) {
  const [height, width] = size(matrix);
  if (!height || !width) return AEU;
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
  this.abstract = makeQuoteAbstract(this.abstract, quote);
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
  const lines = bracket ? rows.map(line => `[${line.join(delimiter)}]`) : rows.map(line => `${line.join(delimiter)}`);
  return discrete ? lines : bracket ? '[' + lines.join(`,${RN} `) + ']' : lines.join(`,${RN}`);
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
 * @param {string} [options.delimiter=',\n']
 * @param {string} [options.quote]
 * @param {boolean} [options.bracket]
 * @param {boolean} [options.ansi]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const deco = (matrix, options = {}) => cosmetics.call(presetMatrixOptions(options), matrix);

export { Deco, cosmetics, deco };
