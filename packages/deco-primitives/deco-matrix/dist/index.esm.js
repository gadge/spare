import { DecoConfig } from '@spare/deco-config';
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco';
import { decoFlat } from '@spare/deco-flat';
import { BRK } from '@spare/enum-brackets';
import { COSP, COLF } from '@spare/enum-chars';
import { ROWWISE } from '@vect/enum-matrix-directions';
import { oneself } from '@ject/oneself';
import { fluoMatrix } from '@palett/fluo-matrix';
import { Br } from '@spare/bracket';
import { liner } from '@spare/liner';
import { matrixMargin } from '@spare/matrix-margin';
import { matrixPadder } from '@spare/matrix-padder';
import { size } from '@vect/matrix';

const CONFIG = {
  delim: COSP,
  bracket: BRK,
  read: decoFlat,
  direct: ROWWISE,
  ansi: true
};

// export const
//   FUNC = '',
//   PIGM = '',
//   HEX = ''
const RENDER = 'render';
const MUTATE_PIGMENT = {
  colorant: RENDER,
  mutate: true
};

const fluo = fluoMatrix.bind(MUTATE_PIGMENT);
const _decoMatrix = function (rows = []) {
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

  rows = matrixPadder(rows, config); // use: ansi

  if (config.presets) rows = fluo(rows, config.direct, config.presets); // use: direct, presets, effects

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

const Deco = (p = {}) => _decoMatrix.bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION));
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

const deco = (matrix, p = {}) => _decoMatrix.call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), matrix);

export { Deco, _decoMatrix, deco };
