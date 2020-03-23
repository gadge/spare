import { BRACKET, NONE } from '@spare/enum-brackets';
import { COSP, COLF, SP } from '@spare/enum-chars';
import { isNumeric } from '@typen/num-strict';
import { quote } from '@spare/quote';
import { APOS } from '@spare/enum-quotes';

const smartKeyRead = x => /\W/.test(x) || isNumeric(x) ? quote(x) : x;

// from x => typeof x
const BOO = 'boolean';
const NUM = 'number';
const STR = 'string';

const smartValueRead = x => {
  const t = typeof x;
  if (x === void 0 || x === null || t === NUM || t === BOO) return x;
  if (t === STR) return !isNumeric(x) ? quote(x) : x;
  return x.toString();
};

/***
 * @param {Object} p
 *
 * @param {string} [p.dash=', ']
 * @param {string} [p.delim=',\n']
 * @param {number} [p.keyQuote=NONE]
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.keyRead=smartValueRead]
 * @param {Function} [p.read=smartValueRead]
 *
 * @param {boolean} [p.objectify=false]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  p.dash = p.dash || COSP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || smartValueRead;
  p.read = p.read || smartValueRead;
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
 * @param {Function} [p.keyRead=smartKeyRead]
 * @param {Function} [p.read=smartValueRead]

 * @param {boolean} [p.objectify=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetEntriesAsObject = p => {
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || COLF;
  p.keyRead = p.keyRead || smartKeyRead;
  p.read = p.read || smartValueRead;
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
 * @param {Function} [p.keyRead=keyRead]
 * @param {Function} [p.read]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  var _p$quote;

  p.keyRead = p.keyRead || smartKeyRead;
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || COLF;
  p.quote = (_p$quote = p.quote) !== null && _p$quote !== void 0 ? _p$quote : APOS;
  p.bracket = BRACKET;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetVector = p => {
  p.delim = p.delim || COSP;
  p.read = p.read || smartValueRead;
  p.bracket = BRACKET;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {string} [p.delim=', ']
 * @param {number} [p.quote=NONE]
 *
 * @param {Function} [p.read=smartValueRead]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  p.delim = p.delim || COSP;
  p.read = p.read || smartValueRead;
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
 * @param {Function} [p.read=smartKeyRead]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$level;

  p.delim = p.delim || COSP;
  p.read = p.read || smartValueRead;
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
 * @param {Function} [p.read]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetTable = p => {
  var _p$level;

  p.delim = p.delim || COSP;
  p.read = p.read || smartValueRead;
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
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetSamples = p => {
  p.indexed = false;
  p.delim = p.delim || COSP;
  p.keyRead = p.keyRead || smartKeyRead;
  p.read = p.read || smartValueRead;
  p.bracket = NONE;
  p.discrete = true;
  return p;
};

export { presetCrostab, presetEntries, presetEntriesAsObject, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
