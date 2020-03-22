'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');
var numStrict = require('@typen/num-strict');

const keyRead = x => /\W/.test(x) || numStrict.isNumeric(x) ? '\'' + x + '\'' : x;

/***
 * @param {Object} p
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 * @param {string} [p.keyQuote]
 * @param {string} [p.quote='\'']
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetEntries = p => {
  p.quote = p.quote || enumChars.QT;
  p.dash = p.dash || enumChars.CO + enumChars.SP;
  p.delim = p.delim || enumChars.CO + enumChars.LF;
  p.bracket = enumBrackets.BRACKET;
  return p;
};
/***
 * @param {Object} p
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 * @param {string} [p.keyQuote]
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote='\'']
 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetEntriesAsObject = p => {
  p.keyRead = keyRead;
  p.dash = p.dash || ':' + enumChars.SP;
  p.delim = p.delim || enumChars.CO + enumChars.LF;
  p.quote = p.quote || enumChars.QT;
  p.bracket = enumBrackets.NONE;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 * @param {Function} [p.keyRead=keyRead]
 * @param {Function} [p.read]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetObject = p => {
  p.keyRead = p.keyRead || keyRead;
  p.dash = p.dash || ':' + enumChars.SP;
  p.delim = p.delim || enumChars.CO + enumChars.LF;
  p.quote = p.quote || enumChars.QT;
  p.bracket = enumBrackets.BRACKET;
  return p;
};

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @param {number} [p.bracket=BRACKET]
 * @returns {Object}
 */

const presetVector = p => {
  p.delim = p.delim || enumChars.CO + enumChars.SP;
  p.quote = p.quote || enumChars.QT;
  p.bracket = enumBrackets.BRACKET;
  return p;
};

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetMatrix = p => {
  p.delim = p.delim || enumChars.CO + enumChars.SP;
  p.quote = p.quote || enumChars.QT;
  p.bracket = enumBrackets.BRACKET;
  p.discrete = true;
  return p;
};

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$level;

  p.delim = p.delim || enumChars.CO + enumChars.SP;
  p.quote = p.quote || enumChars.QT;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetTable = p => {
  var _p$level;

  p.delim = p.delim || enumChars.CO + enumChars.SP;
  p.quote = p.quote || enumChars.QT;
  p.level = ((_p$level = p.level) !== null && _p$level !== void 0 ? _p$level : 0) + 1;
  return p;
};

/**
 *
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote='\'']
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetSamples = p => {
  p.indexed = false;
  p.delim = p.delim || enumChars.CO + enumChars.SP;
  p.quote = p.quote || enumChars.QT;
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
