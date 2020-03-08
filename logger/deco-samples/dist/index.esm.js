import { FRESH, SUBTLE, JUNGLE } from '@palett/presets';
import { COLUMNWISE } from '@vect/matrix';
import { AEU, RN } from '@spare/util';
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

/**
 * @param {Object[]} samples
 * @returns {string}
 */

const cosmati = function (samples) {
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
    delimiter,
    top,
    bottom,
    left,
    right,
    ansi
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
    abstract,
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
  dashY ? mutate(rows, line => (line.splice(l, 0, '..'), `{ ${line.join(delimiter)} }`)) : mutate(rows, line => `{ ${line.join(delimiter)} }`);

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
  return '[' + rows.join(`,${RN} `) + ']';
};

/**
 *
 * @param {*[][]} matrix
 * @param {*[]} fields
 * @param {boolean} [indexed=true]
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [keyPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {number} [top=0]
 * @param {number} [left=0]
 * @param {number} [bottom=0]
 * @param {number} [right=0]
 * @param {string} [delimiter=',']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const deco = (matrix, {
  fields,
  indexed = true,
  direct = COLUMNWISE,
  abstract,
  preset = FRESH,
  keyPreset = SUBTLE,
  stringPreset = JUNGLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  delimiter = ', ',
  ansi = false
} = {}) => cosmati.call({
  fields,
  indexed,
  direct,
  abstract,
  preset,
  keyPreset,
  stringPreset,
  top,
  left,
  bottom,
  right,
  delimiter,
  ansi
}, matrix);

/**
 *
 * @param {*[]} [fields]
 * @param {boolean} [indexed=true]
 * @param {number} [direct] - pointwise = 0, rowwise = 1, columnwise = 2
 * @param {function(*):string} [abstract]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [preset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [keyPreset]
 * @param {{max:string|*[],min:string|*[],na:string|*[]}} [stringPreset]
 * @param {number} [top=0]
 * @param {number} [left=0]
 * @param {number} [bottom=0]
 * @param {number} [right=0]
 * @param {string} [delimiter=',']
 * @param {boolean} [ansi=false]
 * @returns {string}
 */

const Deco = ({
  fields,
  indexed = true,
  direct = COLUMNWISE,
  abstract,
  preset = FRESH,
  keyPreset = SUBTLE,
  stringPreset = JUNGLE,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  delimiter = ', ',
  ansi = false
} = {}) => cosmati.bind({
  fields,
  indexed,
  direct,
  abstract,
  preset,
  keyPreset,
  stringPreset,
  top,
  left,
  bottom,
  right,
  delimiter,
  ansi
});

export { Deco, deco };
