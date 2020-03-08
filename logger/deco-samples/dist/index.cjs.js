'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var matrix = require('@vect/matrix');
var util = require('@spare/util');
var vettro = require('@spare/vettro');
var padMatrix = require('@spare/pad-matrix');
var mattro = require('@spare/mattro');
var fluoVector = require('@palett/fluo-vector');
var fluoMatrix = require('@palett/fluo-matrix');
var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');
var matrixSize = require('@vect/matrix-size');
var matrixMargin = require('@vect/matrix-margin');
var entriesUnwind = require('@vect/entries-unwind');
var objectSelect = require('@vect/object-select');
var math = require('@aryth/math');

/**
 * @param {Object[]} samples
 * @returns {string}
 */

const cosmati = function (samples) {
  var _lookupKeys$call;

  let height, sample, keys, dye, rows;
  if (!(height = samples.length)) return util.AEU;
  if (!(sample = samples[0]) || !(keys = Object.keys(sample)) || !keys.length) return util.AEU;
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
  let [pick, head] = fields ? (_lookupKeys$call = objectSelect.lookupKeys.call(sample, fields), entriesUnwind.unwind(_lookupKeys$call)) : [keys, keys.slice()];
  const {
    head: l,
    tail: r,
    dash: dashY
  } = vettro.marginSizing(pick, left, right);
  const {
    head: t,
    tail: b,
    dash: dashX
  } = vettro.marginSizing(samples, top, bottom);
  const headVG = new vettro.Vectogin(null, l, r, dashY);
  const rowsVG = new vettro.Vectogin(samples, t, b, dashX);
  [pick, head] = [headVG.reboot(pick).toVector(), headVG.reboot(head).toVector()];
  rows = rowsVG.map(sample => objectSelect.selectValues(sample, pick)).toVector();
  let [h, w] = matrixSize.size(rows);
  const {
    raw,
    text
  } = mattro.mattro(rows, {
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
  if (preset) dye = fluoMatrix.fluoMatrix(raw, {
    direct,
    preset,
    stringPreset,
    colorant: true
  });
  if (keyPreset) head = fluoVector.fluoVector(head, {
    preset: keyPreset,
    stringPreset: keyPreset,
    colorant: false
  });
  rows = padMatrix.padMatrix(text, {
    raw,
    dye,
    ansi
  });
  rows = matrixMargin.marginMapper(rows, (x, i, j) => head[j] + ':' + x, t, b, l, r);
  dashY ? vectorMapper.mutate(rows, line => (line.splice(l, 0, '..'), `{ ${line.join(delimiter)} }`)) : vectorMapper.mutate(rows, line => `{ ${line.join(delimiter)} }`);

  if (indexed) {
    const digits = math.intExpon(height) + 1;
    let indices = rowsVG.map((_, i) => String(i).padStart(digits)).toVector();
    if (preset) indices = fluoVector.fluoVector(indices, {
      preset,
      stringPreset,
      colorant: false
    });
    vectorZipper.mutazip(rows, indices, (line, index) => '(' + index + ') ' + line);
  }

  if (dashX) rows.splice(t, 0, '...');
  return '[' + rows.join(`,${util.RN} `) + ']';
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

const deco = (matrix$1, {
  fields,
  indexed = true,
  direct = matrix.COLUMNWISE,
  abstract,
  preset = presets.FRESH,
  keyPreset = presets.SUBTLE,
  stringPreset = presets.JUNGLE,
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
}, matrix$1);

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
  direct = matrix.COLUMNWISE,
  abstract,
  preset = presets.FRESH,
  keyPreset = presets.SUBTLE,
  stringPreset = presets.JUNGLE,
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

exports.Deco = Deco;
exports.deco = deco;
