'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var decoUtil = require('@spare/deco-util');

/***
 * @param {Object} p
 *
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoValue]
 * @param {Function} [p.read=decoValue]
 *
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  p.dash = p.dash || enumChars.COSP;
  p.delim = p.delim || enumChars.COLF;
  p.keyRead = p.keyRead || decoUtil.decoValue;
  p.read = p.read || decoUtil.decoValue;
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
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]

 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntriesAsObject = p => {
  p.dash = p.dash || ':' + enumChars.SP;
  p.delim = p.delim || enumChars.COLF;
  p.keyRead = p.keyRead || decoUtil.decoKey;
  p.read = p.read || decoUtil.decoValue;
  p.bracket = enumBrackets.NONE;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  p.dash = p.dash || ':' + enumChars.SP;
  p.delim = p.delim || enumChars.COLF;
  p.keyRead = p.keyRead || decoUtil.decoKey;
  p.read = p.read || decoUtil.decoValue;
  p.bracket = enumBrackets.BRACKET;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetVector = p => {
  p.delim = p.delim || enumChars.COSP;
  p.read = p.read || decoUtil.decoValue;
  p.bracket = enumBrackets.BRACKET;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  p.delim = p.delim || enumChars.COSP;
  p.read = p.read || decoUtil.decoValue;
  p.bracket = enumBrackets.BRACKET;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$level;

  p.delim = p.delim || enumChars.COSP;
  p.read = p.read || decoUtil.decoValue;
  p.keyRead = p.keyRead || decoUtil.decoKey;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=decoValue]
 * @param {Function} [p.keyRead=decoKey]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetTable = p => {
  var _p$level;

  p.delim = p.delim || enumChars.COSP;
  p.read = p.read || decoUtil.decoValue;
  p.keyRead = p.keyRead || decoUtil.decoKey;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 *
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=decoKey]
 * @param {Function} [p.read=decoValue]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetSamples = p => {
  p.indexed = false;
  p.delim = p.delim || enumChars.COSP;
  p.keyRead = p.keyRead || decoUtil.decoKey;
  p.read = p.read || decoUtil.decoValue;
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
