import { BRACKET, NONE, BRACE } from '@spare/enum-brackets';
import { COSP, COLF, SP } from '@spare/enum-chars';
import { decoValue, decoKey } from '@spare/deco-util';

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
  p.dash = p.dash || COSP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || decoValue;
  p.read = p.read || decoValue;
  p.bracket = BRACKET;
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
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || decoKey;
  p.read = p.read || decoValue;
  p.bracket = NONE;
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
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || decoKey;
  p.read = p.read || decoValue;
  p.bracket = BRACE;
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
  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.bracket = BRACKET;
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
  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.bracket = BRACKET;
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

  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.keyRead = p.keyRead || decoKey;
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

  p.delim = p.delim || COSP;
  p.read = p.read || decoValue;
  p.keyRead = p.keyRead || decoKey;
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
  p.delim = p.delim || COSP;
  p.keyRead = p.keyRead || decoKey;
  p.read = p.read || decoValue;
  p.bracket = NONE;
  p.discrete = true;
  return p;
};

export { presetCrostab, presetEntries, presetEntriesAsObject, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
