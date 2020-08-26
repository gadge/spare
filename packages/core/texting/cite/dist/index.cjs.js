'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var quote = require('@spare/quote');

const REG_LF = /\n/g;
const BACKSLASH_LF = '\\n';
const cite = text => {
  text = quote.tenseQuote(text);
  return text.replace(REG_LF, BACKSLASH_LF);
};

exports.cite = cite;
