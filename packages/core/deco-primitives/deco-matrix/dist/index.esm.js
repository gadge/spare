import { presetMatrix } from '@spare/preset-deco';
import { COLORANT } from '@palett/enum-colorant-modes';
import { fluoMatrix } from '@palett/fluo-matrix';
import { bracket } from '@spare/bracket';
import { COLF } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { mattro } from '@spare/mattro';
import { padMatrix } from '@spare/pad-matrix';
import { size } from '@vect/matrix';

const cosmetics = function (matrix) {
  if (!matrix) return String(matrix);
  const [height, width] = size(matrix);
  if (!height || !width) return liner([], this);
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
  } = mattro(matrix, Object.assign(config, {
    height,
    width
  }) // { top, bottom, left, right, dashX, dashY, read } = config
  );
  let dye = undefined;

  if (presets) {
    dye = fluoMatrix.call(COLORANT, raw, direct, presets);
  }

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
 *
 * @param {boolean|number} [p.bracket=true]
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
 *
 * @param {boolean|number} [p.bracket=true]
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
