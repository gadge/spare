import { BRACKET, NONE } from '@spare/enum-brackets';
import { QT, CO, SP, LF } from '@spare/enum-chars';
import { isNumeric } from '@typen/num-strict';

const keyRead = x => /\W/.test(x) || isNumeric(x) ? '\'' + x + '\'' : x;

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
  p.quote = p.quote || QT;
  p.dash = p.dash || CO + SP;
  p.delim = p.delim || CO + LF;
  p.bracket = BRACKET;
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
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || CO + LF;
  p.quote = p.quote || QT;
  p.bracket = NONE;
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
  p.dash = p.dash || ':' + SP;
  p.delim = p.delim || CO + LF;
  p.quote = p.quote || QT;
  p.bracket = BRACKET;
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
  p.delim = p.delim || CO + SP;
  p.quote = p.quote || QT;
  p.bracket = BRACKET;
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
  p.delim = p.delim || CO + SP;
  p.quote = p.quote || QT;
  p.bracket = BRACKET;
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

  p.delim = p.delim || CO + SP;
  p.quote = p.quote || QT;
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

  p.delim = p.delim || CO + SP;
  p.quote = p.quote || QT;
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
  p.delim = p.delim || CO + SP;
  p.quote = p.quote || QT;
  p.bracket = NONE;
  p.discrete = true;
  return p;
};

export { presetCrostab, presetEntries, presetEntriesAsObject, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
