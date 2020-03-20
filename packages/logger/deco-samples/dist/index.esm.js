import { AEU } from '@spare/enum-chars';
import { marginSizing, Vectogin } from '@spare/vettro';
import { padMatrix } from '@spare/pad-matrix';
import { mattro } from '@spare/mattro';
import { fluoVector } from '@palett/fluo-vector';
import { fluoMatrix } from '@palett/fluo-matrix';
import { mutate } from '@vect/vector-mapper';
import { mutazip } from '@vect/vector-zipper';
import { size } from '@vect/matrix-size';
import { marginMapper } from '@vect/matrix-margin';
import { unwind } from '@vect/entries-unwind';
import { lookupKeys, selectValues } from '@vect/object-select';
import { intExpon } from '@aryth/math';
import { pipeQuote, liner, presetSamplesOptions } from '@spare/deco-util';

const cosmetics = function (samples) {
  var _lookupKeys$call;

  let height, sample, keys, dye, rows;
  if (!(height = samples.length)) return AEU;
  if (!(sample = samples[0]) || !(keys = Object.keys(sample)) || !keys.length) return AEU;
  const {
    fields,
    indexed,
    abstract,
    direct,
    preset,
    keyPreset,
    stringPreset,
    ansi
  } = this;
  let {
    delim,
    quote,
    top,
    bottom,
    left,
    right,
    bracket,
    discrete,
    level
  } = this;
  let [pick, head] = fields ? (_lookupKeys$call = lookupKeys.call(sample, fields), unwind(_lookupKeys$call)) : [keys, keys.slice()];
  const {
    head: l,
    tail: r,
    dash: dashY
  } = marginSizing(pick, left, right);
  const {
    head: t,
    tail: b,
    dash: dashX
  } = marginSizing(samples, top, bottom);
  const headVG = new Vectogin(null, l, r, dashY);
  const rowsVG = new Vectogin(samples, t, b, dashX);
  [pick, head] = [headVG.reboot(pick).toVector(), headVG.reboot(head).toVector()];
  rows = rowsVG.map(sample => selectValues(sample, pick)).toVector();
  let [h, w] = size(rows);
  const {
    raw,
    text
  } = mattro(rows, {
    top: t,
    bottom: b,
    left: l,
    right: r,
    height: h,
    width: w,
    dashX,
    dashY,
    abstract: pipeQuote(abstract, quote),
    hr: null,
    validate: false
  });
  if (preset) dye = fluoMatrix(raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  });
  if (keyPreset) head = fluoVector(head, {
    preset: keyPreset,
    stringPreset: keyPreset,
    colorant: false
  });
  rows = padMatrix(text, {
    raw,
    dye,
    ansi
  });
  rows = marginMapper(rows, (x, i, j) => head[j] + ':' + x, t, b, l, r);
  dashY ? mutate(rows, line => (line.splice(l, 0, '..'), `{ ${line.join(delim)} }`)) : mutate(rows, line => `{ ${line.join(delim)} }`);

  if (indexed) {
    const digits = intExpon(height) + 1;
    let indices = rowsVG.map((_, i) => String(i).padStart(digits)).toVector();
    if (preset) indices = fluoVector(indices, {
      preset,
      stringPreset,
      colorant: false
    });
    mutazip(rows, indices, (line, index) => '(' + index + ') ' + line);
  }

  if (dashX) rows.splice(t, 0, '...');
  return liner(rows, {
    discrete,
    delim: ',\n',
    bracket,
    level
  });
};

/**
 *
 * @param {Object} [options]
 * @param {*[]} [options.fields]
 * @param {boolean} [options.indexed=true]
 * @param {number} [options.direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.keyPreset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.top=0]
 * @param {number} [options.left=0]
 * @param {number} [options.bottom=0]
 * @param {number} [options.right=0]
 * @param {string} [options.delim=',']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(presetSamplesOptions(options));
/**
 *
 * @param {*[][]} samples
 * @param {Object} [options]
 * @param {*[]} [options.fields]
 * @param {boolean} [options.indexed=true]
 * @param {number} [options.direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [options.abstract]
 * @param {Preset} [options.preset]
 * @param {Preset} [options.keyPreset]
 * @param {Preset} [options.stringPreset]
 * @param {number} [options.top=0]
 * @param {number} [options.left=0]
 * @param {number} [options.bottom=0]
 * @param {number} [options.right=0]
 * @param {string} [options.delim=',']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {boolean} [options.discrete]
 * @param {number} [options.level=0]
 * @returns {string}
 */

const deco = (samples, options = {}) => cosmetics.call(presetSamplesOptions(options), samples);

export { Deco, cosmetics, deco };
