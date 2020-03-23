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
var liner = require('@spare/liner');
var quote = require('@spare/quote');
var presetDeco = require('@spare/preset-deco');

const cosmetics = function (samples) {
  var _lookupKeys$call;

  let height, sample, keys, dye, rows;
  if (!(height = samples.length)) return '[]';
  if (!(sample = samples[0]) || !(keys = Object.keys(sample)) || !keys.length) return '[]';
  const {
    fields,
    indexed,
    headRead,
    read,
    direct,
    preset,
    keyPreset,
    stringPreset,
    ansi
  } = this;
  let {
    delim,
    quote: quote$1,
    top,
    bottom,
    left,
    right,
    bracket,
    discrete,
    level
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
  if (headRead) head = head.map(headRead);
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
    read: quote.Qt(read, quote$1),
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
  dashY ? vectorMapper.mutate(rows, line => (line.splice(l, 0, '..'), `{ ${line.join(delim)} }`)) : vectorMapper.mutate(rows, line => `{ ${line.join(delim)} }`);

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
  return liner.liner(rows, {
    discrete,
    delim: enumChars.COLF,
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
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset]
 * @param {Object} [p.keyPreset]
 * @param {Object} [p.stringPreset]
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

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetSamples(p));
/**
 *
 * @param {*[][]} samples
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset]
 * @param {Object} [p.keyPreset]
 * @param {Object} [p.stringPreset]
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

const deco = (samples, p = {}) => cosmetics.call(presetDeco.presetSamples(p), samples);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;