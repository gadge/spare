'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoConfig = require('@spare/deco-config');
var presetDeco = require('@spare/preset-deco');
var decoFlat = require('@spare/deco-flat');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var enumMatrixDirections = require('@vect/enum-matrix-directions');
var convert = require('@analys/convert');
var samplesSelect = require('@analys/samples-select');
var enumColorantModes = require('@palett/enum-colorant-modes');
var fluoMatrix = require('@palett/fluo-matrix');
var fluoVector = require('@palett/fluo-vector');
var decoVector = require('@spare/deco-vector');
var liner = require('@spare/liner');
var matrixPadder = require('@spare/matrix-padder');
var tableMargin = require('@spare/table-margin');
var vectorPadder = require('@spare/vector-padder');
var vectorZipper = require('@vect/vector-zipper');

const CONFIG = {
  delim: enumChars.COSP,
  bracket: enumBrackets.BRK,
  indexed: true,
  read: decoFlat.decoFlat,
  direct: enumMatrixDirections.COLUMNWISE,
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
    const [alpha, beta, gamma] = presets;
    head = fluoVector.fluoVector.call(enumColorantModes.MUTATE_PIGMENT, head, [alpha, gamma !== null && gamma !== void 0 ? gamma : beta]);
    rows = fluoMatrix.fluoMatrix.call(enumColorantModes.MUTATE_PIGMENT, rows, config.direct, [alpha, beta]);
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
    side = vectorPadder.vectorPadder(side, {
      ansi: true
    });
    side = decoVector.deco(side, {
      head,
      tail,
      ansi,
      presets,
      discrete: true
    });
    lines = vectorZipper.zipper(side, lines, (key, line) => '[' + key + ']' + enumChars.SP + line);
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

const Deco = (p = {}) => _decoSamples.bind(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.DUAL_PRESET_COLLECTION));
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

const deco = (samples, p = {}) => _decoSamples.call(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.DUAL_PRESET_COLLECTION), samples);

exports.Deco = Deco;
exports._decoSamples = _decoSamples;
exports.deco = deco;
