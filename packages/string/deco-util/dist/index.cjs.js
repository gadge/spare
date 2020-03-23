'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var quote = require('@spare/quote');
var numStrict = require('@typen/num-strict');
var enumChars = require('@spare/enum-chars');
var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var enumBrackets = require('@spare/enum-brackets');
var decoVector = require('@spare/deco-vector');
var decoObject = require('@spare/deco-object');

const decoString = x => quote.quote(x.replace(/'/g, '\\\''));

const decoKey = x => /\W/.test(x) || numStrict.isNumeric(x) ? decoString(x) : x;

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
  const t = numStrict.inferType(x);
  if (t === enumDataTypes.NUM || t === enumDataTypes.BOO) return x;
  if (t === enumDataTypes.STR) return decoString(x);
  if (t === enumObjectTypes.ARRAY) return decoVector.cosmetics.call(PRESET_VE, x);
  if (t === enumObjectTypes.OBJECT) return decoObject.cosmetics.call(PRESET_OB, x);
  return decoString(x.toString());
}

exports.decoKey = decoKey;
exports.decoString = decoString;
exports.decoValue = decoValue;
