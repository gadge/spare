'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presetDeco = require('@spare/preset-deco');
var convert = require('@analys/convert');
var samplesSelect = require('@analys/samples-select');
var fluoMatrix = require('@palett/fluo-matrix');
var fluoVector = require('@palett/fluo-vector');
var decoVector = require('@spare/deco-vector');
var enumChars = require('@spare/enum-chars');
var liner = require('@spare/liner');
var matrixPadder = require('@spare/matrix-padder');
var tableMargin = require('@spare/table-margin');
var vectorPadder = require('@spare/vector-padder');
var vectorZipper = require('@vect/vector-zipper');

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
    samples = samplesSelect.samplesSelect(samples, fields);
  }

  let table = convert.samplesToTabular(samples, fields);
  let {
    head,
    rows
  } = tableMargin.tableMargin(table, config); // { top: 0, bottom: 0, left, right, height, width, read, headRead }

  rows = matrixPadder.matrixPadder(rows, config);
  const {
    presets
  } = config;

  if (presets) {
    head = fluoVector.fluoVector.call(MUTATE, head, {
      presets: [presets[0], presets[2]]
    });
    rows = fluoMatrix.fluoMatrix.call(MUTATE, rows, config);
  }

  let lines = rows.map(line => '{ ' + vectorZipper.zipper(head, line, (h, x) => h + ':' + x).join(enumChars.COSP) + ' }');

  if (indexed) {
    let side = Object.keys(original);
    const {
      top: head,
      bottom: tail,
      ansi,
      presets
    } = config;
    side = decoVector.deco(side, {
      head,
      tail,
      ansi,
      presets,
      discrete: true
    });
    side = vectorPadder.vectorPadder(side, {
      ansi: true
    });
    lines = vectorZipper.zipper(lines, side, (line, index) => '[' + index + ']' + enumChars.SP + line);
  }

  if (config.top) lines.splice(config.top, 1, enumChars.ELLIP);
  return liner.liner(lines, {
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

const Deco = (p = {}) => cosmetics.bind(presetDeco.presetSamples(p));
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

const deco = (samples, p = {}) => cosmetics.call(presetDeco.presetSamples(p), samples);

exports.Deco = Deco;
exports.cosmetics = cosmetics;
exports.deco = deco;
