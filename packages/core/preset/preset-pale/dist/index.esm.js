import { decoPale } from '@spare/deco-pale';
import { BRK, BRC } from '@spare/enum-brackets';
import { LF, RTSP, COLF, COSP } from '@spare/enum-chars';

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
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
  var _p$dash, _p$delim, _p$bracket, _p$read, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ' > ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale;
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
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
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
  var _p$dash, _p$delim, _p$bracket, _p$read, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : RTSP;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COLF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRC;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale;
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
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read=decoPale]
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
  var _p$dash, _p$delim, _p$bracket, _p$indexed, _p$read, _p$ansi;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : ') ';
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COLF;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : false;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read=decoPale]
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
  var _p$delim, _p$bracket, _p$read, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COSP;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
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
  var _p$delim, _p$read, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 * @param {boolean|number} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.headRead]
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
  var _p$delim, _p$read, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : LF;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/**
 *
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
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
  var _p$delim, _p$bracket, _p$indexed, _p$read, _p$ansi;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : COSP;
  p.bracket = (_p$bracket = p.bracket) !== null && _p$bracket !== void 0 ? _p$bracket : BRK;
  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : true;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

export { presetCrostab, presetEntries, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
