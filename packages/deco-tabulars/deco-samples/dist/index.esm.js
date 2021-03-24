import { DecoConfig } from '@spare/deco-config';
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco';
import { decoFlat } from '@spare/deco-flat';
import { BRK } from '@spare/enum-brackets';
import { COSP, SP, ELLIP, COLF } from '@spare/enum-chars';
import { COLUMNWISE } from '@vect/enum-matrix-directions';
import { samplesToTabular } from '@analys/convert';
import { samplesSelect } from '@analys/samples-select';
import { MUTATE_PIGMENT } from '@palett/enum-colorant-modes';
import { fluoMatrix } from '@palett/fluo-matrix';
import { fluoVector } from '@palett/fluo-vector';
import { deco as deco$1 } from '@spare/deco-vector';
import { liner } from '@spare/liner';
import { matrixPadder } from '@spare/matrix-padder';
import { tableMargin } from '@spare/table-margin';
import { vectorPadder } from '@spare/vector-padder';
import { zipper } from '@vect/vector-zipper';

const CONFIG = {
  delim: COSP,
  bracket: BRK,
  indexed: true,
  read: decoFlat,
  direct: COLUMNWISE,
  ansi: true
};

const _decoSamples = function (samples) {
  var _samples;

  const config = this,
        original = samples;
  let {
    fields,
    indexed,
    bracket,
    discrete,
    level
  } = config;

  if (indexed) {
    samples = Object.values(samples);
  }

  if (!((_samples = samples) !== null && _samples !== void 0 && _samples.length)) return '[]';

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
    const [alpha, beta, gamma] = presets;
    head = fluoVector.call(MUTATE_PIGMENT, head, [alpha, gamma !== null && gamma !== void 0 ? gamma : beta]);
    rows = fluoMatrix.call(MUTATE_PIGMENT, rows, config.direct, [alpha, beta]);
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
    side = vectorPadder(side, {
      ansi: true
    });
    side = deco$1(side, {
      head,
      tail,
      ansi,
      presets,
      discrete: true
    });
    lines = zipper(side, lines, (key, line) => '[' + key + ']' + SP + line);
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

const Deco = (p = {}) => _decoSamples.bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION));
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

const deco = (samples, p = {}) => _decoSamples.call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), samples);

export { Deco, _decoSamples, deco };
