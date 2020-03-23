'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataTypes = require('@typen/enum-data-types');
var enumChars = require('@spare/enum-chars');
var bracket = require('@spare/bracket');
var enumBrackets = require('@spare/enum-brackets');

const quoteString = function (x) {
  const {
    qt
  } = this;
  return typeof x === enumDataTypes.STR ? qt + x + qt : x;
};
const pipeQuote = (read, quote) => {
  if (!(quote === null || quote === void 0 ? void 0 : quote.length)) return read;
  if (!read) return quoteString.bind({
    qt: quote
  });
  return x => {
    var _ref, _x;

    return _ref = (_x = x, read(_x)), quoteString.bind({
      qt: quote
    })(_ref);
  };
};

const joinLines = (lines, de = '', lv, hover = true) => {
  const IND = lv ? enumChars.TB.repeat(lv) : '',
        LFI = enumChars.LF + IND;
  return hover ? `${LFI + enumChars.TB}${lines.join(de + LFI + enumChars.TB)}${de + LFI}` : `${IND + enumChars.TB}${lines.join(de + LFI + enumChars.TB)}${de}`;
};
const liner = (lines, {
  discrete = false,
  delim = enumChars.LF,
  bracket: bracket$1 = enumBrackets.NONE,
  level = 0
} = {}) => discrete ? lines : lines.length && /\n/.test(delim) ? bracket.br(joinLines(lines, /,/.test(delim) ? enumChars.CO : '', level, bracket$1), bracket$1) : bracket.br(lines.join(delim), bracket$1);

exports.joinLines = joinLines;
exports.liner = liner;
exports.pipeQuote = pipeQuote;
exports.quoteString = quoteString;
