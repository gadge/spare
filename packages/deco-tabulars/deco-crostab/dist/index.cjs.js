'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoConfig = require('@spare/deco-config');
var presetDeco = require('@spare/preset-deco');
var decoFlat = require('@spare/deco-flat');
var enumChars = require('@spare/enum-chars');
var enumMatrixDirections = require('@vect/enum-matrix-directions');
var fluoMatrix = require('@palett/fluo-matrix');
var fluoVector = require('@palett/fluo-vector');
var crostabMargin = require('@spare/crostab-margin');
var crostabPadder = require('@spare/crostab-padder');
var liner = require('@spare/liner');
var matrix = require('@vect/matrix');
var vectorMerge = require('@vect/vector-merge');
var vectorZipper = require('@vect/vector-zipper');

const CONFIG = {
  delim: enumChars.LF,
  read: decoFlat.decoFlat,
  ansi: true,
  direct: enumMatrixDirections.POINTWISE
};

const VLINE = ' | ',
      HCONN = '-+-';

const MUTATE = {
  mutate: true
};
/**
 *
 * @param {{side:string[],head:string[],rows:string[]}} crostab
 * @param {object} config
 * @param {number} [config.direct]
 * @param {object|object[]} [config.presets]
 * @param {string[]} [config.effects]
 * @returns {*}
 */

const crostabVerbal = (crostab, config = {}) => {
  const {
    presets
  } = config;
  if (!presets) return crostab;
  const [alpha, beta, gamma] = presets;
  const presetLabels = [alpha, gamma ?? beta],
        presetPoints = [alpha, beta];
  crostab.side = fluoVector.fluoVector.call(MUTATE, crostab.side, presetLabels);
  crostab.head = fluoVector.fluoVector.call(MUTATE, crostab.head, presetLabels);
  crostab.rows = fluoMatrix.fluoMatrix.call(MUTATE, crostab.rows, config.direct, presetPoints); // use: direct, presets

  return crostab;
};
const _decoCrostab = function (crostab) {
  var _crostab$head, _crostab$side;

  if (!crostab) return enumChars.AEU;
  const config = this;
  const [height, width] = matrix.size(crostab.rows),
        labelWidth = (_crostab$head = crostab.head) == null ? void 0 : _crostab$head.length,
        labelHeight = (_crostab$side = crostab.side) == null ? void 0 : _crostab$side.length;
  if (!height || !width || !labelWidth || !labelHeight) return enumChars.AEU;
  crostab = crostabMargin.crostabMargin(crostab, config); // use: top, bottom, left, right, height, width, read, sideRead, headRead

  crostab = crostabPadder.crostabPadder(crostab, config); // use: ansi, fullAngle

  crostab = crostabVerbal(crostab, config); // use: d

  const lines = vectorMerge.acquire([crostab.title + VLINE + crostab.head.join(VLINE), crostab.rule.join(HCONN)], vectorZipper.zipper(crostab.side, crostab.rows, (s, r) => s + VLINE + r.join(VLINE)));
  return liner.liner(lines, config); // use: discrete, delim, level
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object|Object[]} [p.presets=[FRESH,JUNGLE,SUBTLE]]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const Deco = (p = {}) => _decoCrostab.bind(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.TRI_PRESET_COLLECTION));
/**
 *
 * @param {Object} crostab
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=POINTWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {string}
 */

const deco = (crostab, p = {}) => _decoCrostab.call(decoConfig.DecoConfig.parse(p, CONFIG, presetDeco.TRI_PRESET_COLLECTION), crostab);

exports.Deco = Deco;
exports._decoCrostab = _decoCrostab;
exports.deco = deco;
