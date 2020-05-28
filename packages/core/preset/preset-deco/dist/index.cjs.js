'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var enumBrackets = require('@spare/enum-brackets');
var presets = require('@palett/presets');
var decoFlat = require('@spare/deco-flat');
var enumMatrixDirections = require('@vect/enum-matrix-directions');

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.colors]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  var _p$dash, _p$delim, _p$preset, _p$stringPreset, _p$colors, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ' > ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.LF;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  p.read = p.read || decoFlat.decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.OCEAN;
  p.colors = (_p$colors = p.colors) !== null && _p$colors !== void 0 ? _p$colors : [{
    preset: p.preset
  }, {
    preset: p.stringPreset
  }];
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
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
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.colors]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  var _p$dash, _p$delim, _p$preset, _p$stringPreset, _p$colors, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : enumChars.RTSP;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COLF;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRC;
  p.read = p.read || decoFlat.decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.PLANET;
  p.colors = (_p$colors = p.colors) !== null && _p$colors !== void 0 ? _p$colors : [{
    preset: p.preset
  }, {
    preset: p.stringPreset
  }];
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
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
 * @param {*} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.colors]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetVector = p => {
  var _p$dash, _p$delim, _p$indexed, _p$preset, _p$stringPreset, _p$colors, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ') ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COLF;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : true;
  p.read = p.read || decoFlat.decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.JUNGLE;
  p.colors = (_p$colors = p.colors) !== null && _p$colors !== void 0 ? _p$colors : [{
    preset: p.preset
  }, {
    preset: p.stringPreset
  }];
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 * @param {*} [p.bracket=true]
 *
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.colors]
 * @param {Object} [p.preset=FRESH] - will be deprecated
 * @param {Object} [p.stringPreset=OCEAN] - will be deprecated
 * @param {number} [p.direct=ROWWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  var _p$delim, _p$direct, _p$preset, _p$stringPreset, _p$colors, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  p.read = p.read || decoFlat.decoFlat;
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.ROWWISE;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.PLANET;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.METRO;
  p.colors = (_p$colors = p.colors) !== null && _p$colors !== void 0 ? _p$colors : [{
    preset: p.preset
  }, {
    preset: p.stringPreset
  }];
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
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
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object[]} [p.colors]
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
  var _p$delim, _p$preset, _p$stringPreset, _p$labelPreset, _p$colors, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.LF;
  p.read = p.read || decoFlat.decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.JUNGLE;
  p.labelPreset = (_p$labelPreset = p.labelPreset) !== null && _p$labelPreset !== void 0 ? _p$labelPreset : presets.SUBTLE;
  p.colors = (_p$colors = p.colors) !== null && _p$colors !== void 0 ? _p$colors : [{
    preset: p.preset
  }, {
    preset: p.stringPreset
  }];
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.POINTWISE;
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
 * @param {*} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 *
 * @param {Object[]} [p.colors]
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
  var _p$delim, _p$preset, _p$stringPreset, _p$labelPreset, _p$colors, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.LF;
  p.read = p.read || decoFlat.decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.JUNGLE;
  p.labelPreset = (_p$labelPreset = p.labelPreset) !== null && _p$labelPreset !== void 0 ? _p$labelPreset : presets.SUBTLE;
  p.colors = (_p$colors = p.colors) !== null && _p$colors !== void 0 ? _p$colors : [{
    preset: p.preset
  }, {
    preset: p.stringPreset
  }];
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.COLUMNWISE;
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
 * @param {*} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.colors]
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
  var _p$delim, _p$preset, _p$keyPreset, _p$stringPreset, _p$colors, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.bracket = !p.bracket ? enumBrackets.NONE : enumBrackets.BRK;
  p.indexed = p.indexed || true;
  p.read = p.read || decoFlat.decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : presets.FRESH;
  p.keyPreset = (_p$keyPreset = p.keyPreset) !== null && _p$keyPreset !== void 0 ? _p$keyPreset : presets.SUBTLE;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : presets.JUNGLE;
  p.colors = (_p$colors = p.colors) !== null && _p$colors !== void 0 ? _p$colors : [{
    preset: p.preset
  }, {
    preset: p.stringPreset
  }];
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : enumMatrixDirections.COLUMNWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

exports.presetCrostab = presetCrostab;
exports.presetEntries = presetEntries;
exports.presetMatrix = presetMatrix;
exports.presetObject = presetObject;
exports.presetSamples = presetSamples;
exports.presetTable = presetTable;
exports.presetVector = presetVector;
