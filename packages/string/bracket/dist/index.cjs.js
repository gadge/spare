'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumBrackets = require('@spare/enum-brackets');

const parenth = x => '(' + x + ')';
const bracket = x => '[' + x + ']';
const brace = x => '{' + x + '}';
const anglebr = x => '<' + x + '>';
const br = (x, mode = enumBrackets.BRK) => {
  if (mode === enumBrackets.PAR) return parenth(x);
  if (mode === enumBrackets.BRK) return bracket(x);
  if (mode === enumBrackets.BRC) return brace(x);
  if (mode === enumBrackets.ANBR) return anglebr(x);
  return x;
};

exports.anglebr = anglebr;
exports.br = br;
exports.brace = brace;
exports.bracket = bracket;
exports.parenth = parenth;
