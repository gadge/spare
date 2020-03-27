'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumBrackets = require('@spare/enum-brackets');

const parenth = x => '(' + x + ')';
const bracket = x => '[' + x + ']';
const brace = x => '{' + x + '}';
const anglebr = x => '<' + x + '>';
const br = (x, mode) => {
  if (mode === enumBrackets.PAR) return parenth(x);
  if (mode === enumBrackets.BRK) return bracket(x);
  if (mode === enumBrackets.BRC) return brace(x);
  if (mode === enumBrackets.ANBR) return anglebr(x);
  return x;
};

const SelectBr = mode => {
  if (mode === enumBrackets.PAR) return parenth;
  if (mode === enumBrackets.BRK) return bracket;
  if (mode === enumBrackets.BRC) return brace;
  if (mode === enumBrackets.ANBR) return anglebr;
  return null;
};
const Br = (read, mode) => {
  const br = SelectBr(mode);
  if (!mode) return read;
  if (!read) return br;
  return x => {
    var _ref, _x;

    return _ref = (_x = x, read(_x)), br(_ref);
  };
};

exports.Br = Br;
exports.SelectBr = SelectBr;
exports.anglebr = anglebr;
exports.br = br;
exports.brace = brace;
exports.bracket = bracket;
exports.parenth = parenth;
