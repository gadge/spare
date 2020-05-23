import { fluoMatrix } from '@palett/fluo-matrix';
import { bracket } from '@spare/bracket';
import { COLF } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { mattro } from '@spare/mattro';
import { padMatrix } from '@spare/pad-matrix';
import { Qt } from '@spare/quote';
import { size } from '@vect/matrix';
import { presetMatrix } from '@spare/preset-deco';

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
  } = mattro(matrix, {
    top,
    bottom,
    left,
    right,
    height,
    width,
    dashX,
    dashY,
    read: Qt(read, quote)
  });
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
    delim: COLF,
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

const Deco = (p = {}) => cosmetics.bind(presetMatrix(p));
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

const deco = (matrix, p = {}) => cosmetics.call(presetMatrix(p), matrix);

export { Deco, cosmetics, deco };
