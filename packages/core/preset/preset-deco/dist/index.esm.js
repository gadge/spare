import { LF, RTSP, COLF, COSP } from '@spare/enum-chars';
import { NONE, BRK, BRC } from '@spare/enum-brackets';
import { FRESH, OCEAN, PLANET, JUNGLE, SUBTLE } from '@palett/presets';
import { decoFlat } from '@spare/deco-flat';
import { ROWWISE, POINTWISE, COLUMNWISE } from '@vect/enum-matrix-directions';

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
  var _p$dash, _p$delim, _p$preset, _p$stringPreset, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ' > ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.bracket = !p.bracket ? NONE : BRK;
  p.read = p.read || decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : OCEAN;
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
  var _p$dash, _p$delim, _p$preset, _p$stringPreset, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : RTSP;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COLF;
  p.bracket = !p.bracket ? NONE : BRC;
  p.read = p.read || decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : PLANET;
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
  var _p$dash, _p$delim, _p$indexed, _p$preset, _p$stringPreset, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ') ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COLF;
  p.bracket = !p.bracket ? NONE : BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : true;
  p.read = p.read || decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : JUNGLE;
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
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
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
  var _p$delim, _p$direct, _p$preset, _p$stringPreset, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COSP;
  p.bracket = !p.bracket ? NONE : BRK;
  p.read = p.read || decoFlat;
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : ROWWISE;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : OCEAN;
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
  var _p$delim, _p$preset, _p$stringPreset, _p$labelPreset, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.read = p.read || decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : JUNGLE;
  p.labelPreset = (_p$labelPreset = p.labelPreset) !== null && _p$labelPreset !== void 0 ? _p$labelPreset : SUBTLE;
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : POINTWISE;
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
  var _p$delim, _p$preset, _p$stringPreset, _p$labelPreset, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.read = p.read || decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : FRESH;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : JUNGLE;
  p.labelPreset = (_p$labelPreset = p.labelPreset) !== null && _p$labelPreset !== void 0 ? _p$labelPreset : SUBTLE;
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : COLUMNWISE;
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
  var _p$delim, _p$preset, _p$keyPreset, _p$stringPreset, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COSP;
  p.bracket = !p.bracket ? NONE : BRK;
  p.indexed = p.indexed || true;
  p.read = p.read || decoFlat;
  p.preset = (_p$preset = p.preset) !== null && _p$preset !== void 0 ? _p$preset : FRESH;
  p.keyPreset = (_p$keyPreset = p.keyPreset) !== null && _p$keyPreset !== void 0 ? _p$keyPreset : SUBTLE;
  p.stringPreset = (_p$stringPreset = p.stringPreset) !== null && _p$stringPreset !== void 0 ? _p$stringPreset : JUNGLE;
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : COLUMNWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

export { presetCrostab, presetEntries, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
