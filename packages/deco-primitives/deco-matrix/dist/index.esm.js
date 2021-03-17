import { presetMatrix } from '@spare/preset-deco';
import { oneself } from '@ject/oneself';
import { fluoMatrix } from '@palett/fluo-matrix';
import { Br } from '@spare/bracket';
import { COLF } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { matrixMargin } from '@spare/matrix-margin';
import { matrixPadder } from '@spare/matrix-padder';
import { size } from '@vect/matrix';

const fluo = fluoMatrix.bind({
  colorant: false,
  mutate: true
});
/**
 *
 * @param {*[][]} rows
 * @param {object} config
 * @param {number} config.direct
 * @param {object|object[]} config.presets
 * @param {string[]} config.effects
 * @returns {string[][]}
 */

const matrixColour = (rows, config) => {
  if (config.presets) rows = fluo(rows, config); // use: direct, presets, effects

  return rows;
};

const cosmetics = function (rows = []) {
  var _Br;

  const config = this,
        [height, width] = size(rows);
  if (!height || !width) return liner([], config);
  let {
    discrete,
    delim,
    bracket,
    level
  } = config;
  const br = (_Br = Br(bracket)) !== null && _Br !== void 0 ? _Br : oneself;
  rows = matrixMargin(rows, config); // use: top, bottom, left, right, read, rule

  rows = matrixColour(rows, config); // use: direct, presets, effects
  // if (config.presets) rows = fluo(rows, config) // use: direct, presets, effects

  rows = matrixPadder(rows, config); // use: ansi

  return liner(rows.map(line => br(line.join(delim))), {
    discrete,
    delim: COLF,
    bracket,
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
 * @param {boolean} [p.full]
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
 * @param {Object|Object[]} [p.presets=[FRESH, OCEAN]]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {boolean} [p.full]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (matrix, p = {}) => cosmetics.call(presetMatrix(p), matrix);

export { Deco, cosmetics, deco };
