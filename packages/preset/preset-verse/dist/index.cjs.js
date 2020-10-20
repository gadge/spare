'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoPale = require('@spare/deco-pale');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');

/***
 * @param {Object} p
 *
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 *
 * @param {Function} [p.keyRead=decoPale]
 * @param {Function} [p.read=decoPale]
 *
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  var _p$dash, _p$delim, _p$read;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : enumChars.COSP;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COLF;
  p.keyRead = p.keyRead || decoPale.decoPale;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale.decoPale;
  p.bracket = enumBrackets.BRACKET;
  p.discrete = true;
  return p;
};
/***
 * @param {Object} p
 *
 * @param {number} [p.keyQuote]
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']

 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoPale]

 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntriesAsObject = p => {
  var _p$dash2, _p$delim2, _p$read2;

  p.dash = (_p$dash2 = p.dash) !== null && _p$dash2 !== void 0 ? _p$dash2 : enumChars.RTSP;
  p.delim = (_p$delim2 = p.delim) !== null && _p$delim2 !== void 0 ? _p$delim2 : enumChars.COLF;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = (_p$read2 = p.read) !== null && _p$read2 !== void 0 ? _p$read2 : decoPale.decoPale;
  p.bracket = enumBrackets.NONE;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  var _p$dash, _p$delim, _p$read;

  p.dash = (_p$dash = p.dash) !== null && _p$dash !== void 0 ? _p$dash : enumChars.RTSP;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COLF;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale.decoPale;
  p.bracket = enumBrackets.BRACE;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 *
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetVector = p => {
  var _p$delim, _p$read;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale.decoPale;
  p.bracket = enumBrackets.BRACKET;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 *
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  var _p$delim, _p$read;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale.decoPale;
  p.bracket = enumBrackets.BRACKET;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$delim, _p$read, _p$level;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale.decoPale;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetTable = p => {
  var _p$delim, _p$read, _p$level;

  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale.decoPale;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetSamples = p => {
  var _p$delim, _p$read;

  p.indexed = false;
  p.delim = (_p$delim = p.delim) !== null && _p$delim !== void 0 ? _p$delim : enumChars.COSP;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = (_p$read = p.read) !== null && _p$read !== void 0 ? _p$read : decoPale.decoPale;
  p.bracket = enumBrackets.NONE;
  p.discrete = true;
  return p;
};

exports.presetCrostab = presetCrostab;
exports.presetEntries = presetEntries;
exports.presetEntriesAsObject = presetEntriesAsObject;
exports.presetMatrix = presetMatrix;
exports.presetObject = presetObject;
exports.presetSamples = presetSamples;
exports.presetTable = presetTable;
exports.presetVector = presetVector;
