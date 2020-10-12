import { presetSamples } from '@spare/preset-deco';
import { samplesToTabular } from '@analys/convert';
import { samplesSelect } from '@analys/samples-select';
import { fluoMatrix } from '@palett/fluo-matrix';
import { fluoVector } from '@palett/fluo-vector';
import { deco as deco$1 } from '@spare/deco-vector';
import { COSP, SP, ELLIP, COLF } from '@spare/enum-chars';
import { liner } from '@spare/liner';
import { matrixPadder } from '@spare/matrix-padder';
import { tableMargin } from '@spare/table-margin';
import { vectorPadder } from '@spare/vector-padder';
import { zipper } from '@vect/vector-zipper';

const MUTATE = {
  mutate: true
};
const cosmetics = function (samples) {
  var _samples;

  const config = this,
        original = samples;
  if (!((_samples = samples) === null || _samples === void 0 ? void 0 : _samples.length)) return '[]';
  let {
    fields,
    indexed,
    bracket,
    discrete,
    level
  } = config;

  if (fields) {
    samples = samplesSelect(samples, fields);
  }

  let table = samplesToTabular(samples, fields);
  let {
    head,
    rows
  } = tableMargin(table, config); // { top: 0, bottom: 0, left, right, height, width, read, headRead }

  rows = matrixPadder(rows, config);
  const {
    presets
  } = config;

  if (presets) {
    head = fluoVector.call(MUTATE, head, {
      presets: [presets[0], presets[2]]
    });
    rows = fluoMatrix.call(MUTATE, rows, config);
  }

  let lines = rows.map(line => '{ ' + zipper(head, line, (h, x) => h + ':' + x).join(COSP) + ' }');

  if (indexed) {
    let side = Object.keys(original);
    const {
      top: head,
      bottom: tail,
      ansi,
      presets
    } = config;
    side = deco$1(side, {
      head,
      tail,
      ansi,
      presets,
      discrete: true
    });
    side = vectorPadder(side, {
      ansi: true
    });
    lines = zipper(lines, side, (line, index) => '[' + index + ']' + SP + line);
  }

  if (config.top) lines.splice(config.top, 1, ELLIP);
  return liner(lines, {
    discrete,
    delim: COLF,
    bracket,
    level
  });
};

/**
 *
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, PLANET, SUBTLE]]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const Deco = (p = {}) => cosmetics.bind(presetSamples(p));
/**
 *
 * @param {*[][]} samples
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, PLANET, SUBTLE]]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (samples, p = {}) => cosmetics.call(presetSamples(p), samples);

export { Deco, cosmetics, deco };
