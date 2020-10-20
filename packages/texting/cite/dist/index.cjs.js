'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var quote = require('@spare/quote');
var translator = require('@spare/translator');

var _ref;
const REG_CR = /\r/g;
const BACKSLASH_CR = '\\r';
const REG_LF = /\n/g;
const BACKSLASH_LF = '\\n';
const dictionary = (_ref = [[REG_CR, BACKSLASH_CR], [REG_LF, BACKSLASH_LF]], translator.makeReplaceable(_ref));
const cite = text => {
  text = quote.tenseQuote(text);
  return text.replace(dictionary);
};

exports.cite = cite;
