import { decoFlat } from '@spare/deco-flat';
import { BRK, BRC } from '@spare/enum-brackets';
import { LF, RTSP, COLF, COSP } from '@spare/enum-chars';
import { FRESH, PLANET, SUBTLE } from '@palett/presets';
import { ROWWISE, POINTWISE, COLUMNWISE } from '@vect/enum-matrix-directions';

const NUMERIC_PRESET = {
  preset: FRESH
};
const LITERAL_PRESET = {
  preset: PLANET
};
const HEADING_PRESET = {
  preset: SUBTLE
};

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 *
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.presets]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
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
  var _p$dash, _p$delim, _p$bracket, _p$read, _p$presets, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ' > ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat;
  p.presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET];
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
 *
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Object[]} [p.presets]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
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
  var _p$dash, _p$delim, _p$bracket, _p$read, _p$presets, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : RTSP;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COLF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRC;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat;
  p.presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET];
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
 *
 * @param {*} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
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
  var _p$dash, _p$delim, _p$bracket, _p$indexed, _p$read, _p$presets, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ') ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COLF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : false;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat;
  p.presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET];
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 *
 * @param {*} [p.bracket=true]
 *
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
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
  var _p$delim, _p$bracket, _p$read, _p$direct, _p$presets, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COSP;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat;
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : ROWWISE;
  p.presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET];
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 *  - currently not functional, keeps for future fix
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {Object[]} [p.presets]
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
  var _p$delim, _p$read, _p$presets, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat;
  p.presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET];
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
 *  - currently not functional, keeps for future fix
 * @param {*} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoFlat]
 * @param {Function} [p.headRead]
 *
 * @param {Object[]} [p.presets]
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
  var _p$delim, _p$read, _p$presets, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat;
  p.presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET];
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
 *
 * @param {*} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoFlat]
 *
 * @param {Object[]} [p.presets]
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
  var _p$delim, _p$bracket, _p$indexed, _p$read, _p$presets, _p$direct, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COSP;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : true;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoFlat;
  p.presets = (_p$presets = p.presets) !== null && _p$presets !== void 0 ? _p$presets : [NUMERIC_PRESET, LITERAL_PRESET, HEADING_PRESET];
  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : COLUMNWISE;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

export { HEADING_PRESET, LITERAL_PRESET, NUMERIC_PRESET, presetCrostab, presetEntries, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
