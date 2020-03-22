'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumQuotes = require('@spare/enum-quotes');

const quote = x => '\'' + x + '\'';
const ditto = x => '\"' + x + '\"';
const qt = (x, mode = enumQuotes.APOS) => {
  if (mode === enumQuotes.APOS) return quote(x);
  if (mode === enumQuotes.DITTO) return ditto(x);
  return x;
};

exports.ditto = ditto;
exports.qt = qt;
exports.quote = quote;
