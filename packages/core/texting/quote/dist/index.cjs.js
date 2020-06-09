'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var enumQuotes = require('@spare/enum-quotes');
var literal = require('@typen/literal');
var nullish = require('@typen/nullish');

const quote = x => enumChars.QT + x + enumChars.QT;
const ditto = x => enumChars.DT + x + enumChars.DT;
const qt = (x, mode) => {
  if (mode === enumQuotes.APOS || mode === enumChars.QT) return quote(x);
  if (mode === enumQuotes.DITTO || mode === enumChars.DT) return ditto(x);
  if (!nullish.nullish(mode) && literal.isString(mode)) return mode + x + mode;
  return x;
};

const Qt = mode => {
  if (mode === enumQuotes.APOS || mode === enumChars.QT) return quote;
  if (mode === enumQuotes.DITTO || mode === enumChars.DT) return ditto;
  return null;
}; // export const Qt = (read, mode) => {
//   if (!mode) return read
//   if (!read) return SelectQt(mode)
//   return x => x |> read |> SelectQt(mode)
// }

const DUALQT = /^'(.*)'$/;
const ANYQT = /'/g;
const CTQT = '\\\'';
const tenseQuote = x => DUALQT.test(x) ? x.replace(DUALQT, (_, x) => quote(x.replace(ANYQT, CTQT))) : quote(x.replace(ANYQT, CTQT));

exports.Qt = Qt;
exports.ditto = ditto;
exports.qt = qt;
exports.quote = quote;
exports.tenseQuote = tenseQuote;
