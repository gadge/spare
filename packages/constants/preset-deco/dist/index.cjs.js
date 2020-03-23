'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var presets = require('@palett/presets');
var enumMatrixDirections = require('@vect/enum-matrix-directions');

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  p.preset = p.preset || presets.FRESH;
  p.stringPreset = p.stringPreset || presets.OCEAN;
  p.dash = p.dash || ' > ';
  p.delim = p.delim || enumChars.LF;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return p;
};

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRC]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  p.preset = p.preset || presets.FRESH;
  p.stringPreset = p.stringPreset || presets.PLANET;
  p.dash = p.dash || ': ';
  p.delim = p.delim || enumChars.CO + enumChars.LF;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRC;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetVector = p => {
  var _p$indexed;

  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : true;
  p.preset = p.preset || presets.FRESH;
  p.stringPreset = p.stringPreset || presets.JUNGLE;
  p.dash = p.dash || ') ';
  p.delim = p.delim || enumChars.CO + enumChars.LF;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 * @param {number} [p.bracket=BRK]
 *
 * @param {Function} [p.read]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  p.direct = p.direct || enumMatrixDirections.ROWWISE;
  p.preset = p.preset || presets.FRESH;
  p.stringPreset = p.stringPreset || presets.OCEAN;
  p.delim = p.delim || enumChars.CO + enumChars.SP;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 * @param {number} [p.quote=NONE] - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
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
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$direct, _p$ansi;

  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.POINTWISE;
  p.preset = p.preset || presets.FRESH;
  p.stringPreset = p.stringPreset || presets.JUNGLE;
  p.labelPreset = p.labelPreset || presets.SUBTLE;
  p.delim = p.delim || enumChars.LF;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE] - currently not functional, keeps for future fix
 * @param {boolean} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]

 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetTable = p => {
  var _p$direct, _p$ansi;

  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.COLUMNWISE;
  p.preset = p.preset || presets.FRESH;
  p.stringPreset = p.stringPreset || presets.JUNGLE;
  p.labelPreset = p.labelPreset || presets.SUBTLE;
  p.delim = p.delim || enumChars.LF;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
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
 * @returns {Object}
 */

const presetSamples = p => {
  p.indexed = p.indexed || true;
  p.direct = p.direct || enumMatrixDirections.COLUMNWISE;
  p.preset = p.preset || presets.FRESH;
  p.keyPreset = p.keyPreset || presets.SUBTLE;
  p.stringPreset = p.stringPreset || presets.JUNGLE;
  p.delim = p.delim || enumChars.CO + enumChars.SP;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  return p;
};

exports.presetCrostab = presetCrostab;
exports.presetEntries = presetEntries;
exports.presetMatrix = presetMatrix;
exports.presetObject = presetObject;
exports.presetSamples = presetSamples;
exports.presetTable = presetTable;
exports.presetVector = presetVector;
