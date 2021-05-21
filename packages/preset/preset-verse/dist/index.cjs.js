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
  p.dash = p.dash ?? enumChars.COSP;
  p.delim = p.delim ?? enumChars.COLF;
  p.keyRead = p.keyRead || decoPale.decoPale;
  p.read = p.read ?? decoPale.decoPale;
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
  p.dash = p.dash ?? enumChars.RTSP;
  p.delim = p.delim ?? enumChars.COLF;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = p.read ?? decoPale.decoPale;
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
  p.dash = p.dash ?? enumChars.RTSP;
  p.delim = p.delim ?? enumChars.COLF;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = p.read ?? decoPale.decoPale;
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
  p.delim = p.delim ?? enumChars.COSP;
  p.read = p.read ?? decoPale.decoPale;
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
  p.delim = p.delim ?? enumChars.COSP;
  p.read = p.read ?? decoPale.decoPale;
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
  p.delim = p.delim ?? enumChars.COSP;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = p.read ?? decoPale.decoPale;
  p.level = (p.level ?? 0) + 1;
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
  p.delim = p.delim ?? enumChars.COSP;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = p.read ?? decoPale.decoPale;
  p.level = (p.level ?? 0) + 1;
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
  p.indexed = false;
  p.delim = p.delim ?? enumChars.COSP;
  p.keyRead = p.keyRead || decoPale.decoKey;
  p.read = p.read ?? decoPale.decoPale;
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
