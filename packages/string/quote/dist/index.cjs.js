'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumQuotes = require('@spare/enum-quotes');

const quote = x => '\'' + x + '\'';
const ditto = x => '\"' + x + '\"';
const qt = (x, mode) => {
  if (mode === enumQuotes.APOS) return quote(x);
  if (mode === enumQuotes.DITTO) return ditto(x);
  return x;
};

const SelectQt = mode => {
  if (mode === enumQuotes.APOS) return quote;
  if (mode === enumQuotes.DITTO) return ditto;
  return null;
};
const Qt = (read, mode) => {
  const qt = SelectQt(mode);
  if (!mode) return read;
  if (!read) return qt;
  return x => {
    var _ref, _x;

    return _ref = (_x = x, read(_x)), qt(_ref);
  };
};

const DUALQT = /^'(.*)'$/;
const ANYQT = /'/g;
const CTQT = '\\\'';
const tenseQuote = x => DUALQT.test(x) ? x.replace(DUALQT, (_, x) => quote(x.replace(ANYQT, CTQT))) : quote(x.replace(ANYQT, CTQT));

exports.Qt = Qt;
exports.ditto = ditto;
exports.qt = qt;
exports.quote = quote;
exports.tenseQuote = tenseQuote;
