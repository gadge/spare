'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var numStrict = require('@typen/num-strict');
var quote = require('@spare/quote');
var enumChars = require('@spare/enum-chars');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var enumBrackets = require('@spare/enum-brackets');
var decoVector = require('@spare/deco-vector');
var decoObject = require('@spare/deco-object');

const decoKey = x => /\W/.test(x) || numStrict.isNumeric(x) ? quote.tenseQuote(x) : x;

/**
 *
 * @type {Function|function(*):string}
 */
const protoType = Function.prototype.call.bind(Object.prototype.toString);
/**
 * const rxObj = /^\[object (.*)]$/
 * Equivalent to: Object.prototype.stringify.call(o).match(rxObj)[1]
 * @param {*} o
 * @return {string}
 */

const typ = o => protoType(o).slice(8, -1);

const PRESET_VE = {
  delim: enumChars.COSP,
  read: decoValue,
  bracket: enumBrackets.BRACKET
};
const PRESET_OB = {
  dash: ':',
  delim: enumChars.COSP,
  keyRead: decoKey,
  read: decoValue,
  bracket: enumBrackets.BRACE
};
function decoValue(x) {
  if (x === void 0 || x === null) return x;
  let t = typeof x;
  if (t === enumDataTypes.NUM || t === enumDataTypes.BOO) return x;
  if (t === enumDataTypes.STR) return quote.tenseQuote(x);

  if (t === enumDataTypes.OBJ && (t = typ(x))) {
    if (t === enumObjectTypes.ARRAY) return decoVector.cosmetics.call(PRESET_VE, x);
    if (t === enumObjectTypes.OBJECT) return decoObject.cosmetics.call(PRESET_OB, x);
  }

  return quote.tenseQuote(x.toString());
}

const PRESET_VE$1 = {
  delim: enumChars.COSP,
  read: decoLoose,
  bracket: enumBrackets.BRACKET
};
const PRESET_OB$1 = {
  dash: ':',
  delim: enumChars.COSP,
  keyRead: decoKey,
  read: decoLoose,
  bracket: enumBrackets.BRACE
};
function decoLoose(x) {
  if (x === void 0 || x === null) return x;
  const t = numStrict.inferType(x);
  if (t === enumDataTypes.NUM || t === enumDataTypes.BOO) return x;
  if (t === enumDataTypes.STR) return quote.tenseQuote(x);
  if (t === enumObjectTypes.ARRAY) return decoVector.cosmetics.call(PRESET_VE$1, x);
  if (t === enumObjectTypes.OBJECT) return decoObject.cosmetics.call(PRESET_OB$1, x);
  return quote.tenseQuote(x.toString());
}

exports.decoKey = decoKey;
exports.decoLoose = decoLoose;
exports.decoValue = decoValue;
