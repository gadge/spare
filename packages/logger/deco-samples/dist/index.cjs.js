'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
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
var decoUtil = require('@spare/deco-util');

const cosmetics = function (samples) {
  var _lookupKeys$call;

  let height, sample, keys, dye, rows;
  if (!(height = samples.length)) return enumChars.AEU;
  if (!(sample = samples[0]) || !(keys = Object.keys(sample)) || !keys.length) return enumChars.AEU;
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
    delimiter,
    quote,
    top,
    bottom,
    left,
    right,
    bracket,
    discrete
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
    abstract: decoUtil.makeQuoteAbstract(abstract, quote),
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
  return discrete ? rows : bracket ? '[' + rows.join(`,${enumChars.RN} `) + ']' : rows.join(`,${enumChars.RN}`);
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
 * @param {string} [options.delimiter=',']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const Deco = (options = {}) => cosmetics.bind(decoUtil.presetSamplesOptions(options));
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
 * @param {string} [options.delimiter=',']
 * @param {string} [options.quote]
 * @param {boolean} [options.ansi=false]
 * @param {boolean} [options.discrete]
 * @returns {string}
 */

const deco = (samples, options = {}) => cosmetics.call(decoUtil.presetSamplesOptions(options), samples);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
