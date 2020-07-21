'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bracket = require('@spare/bracket');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');

const joinLines = (lines, de = '', lv, hover = true) => {
  const IND = lv > 0 ? enumChars.TB.repeat(lv) : '',
        LFI = enumChars.LF + IND;
  return hover ? `${LFI + enumChars.TB}${lines.join(de + LFI + enumChars.TB)}${de + LFI}` : `${IND + enumChars.TB}${lines.join(de + LFI + enumChars.TB)}${de}`;
};
const LINEFEED = /\n/;
const COMMA = /,/;
const liner = (lines, {
  discrete = false,
  delim = enumChars.LF,
  bracket: bracket$1 = enumBrackets.NONE,
  level = 0
} = {}) => {
  if (discrete) return lines;
  const hover = !!bracket$1;
  const joined = lines.length && LINEFEED.test(delim) ? joinLines(lines, COMMA.test(delim) ? enumChars.CO : '', level, hover) : lines.join(delim);
  return bracket.br(joined, bracket$1);
};

exports.joinLines = joinLines;
exports.liner = liner;
