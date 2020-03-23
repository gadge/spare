import { STR } from '@typen/enum-data-types';
import { TB, LF, CO } from '@spare/enum-chars';
import { br } from '@spare/bracket';
import { NONE } from '@spare/enum-brackets';

const quoteString = function (x) {
  const {
    qt
  } = this;
  return typeof x === STR ? qt + x + qt : x;
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
  const IND = lv ? TB.repeat(lv) : '',
        LFI = LF + IND;
  return hover ? `${LFI + TB}${lines.join(de + LFI + TB)}${de + LFI}` : `${IND + TB}${lines.join(de + LFI + TB)}${de}`;
};
const liner = (lines, {
  discrete = false,
  delim = LF,
  bracket = NONE,
  level = 0
} = {}) => discrete ? lines : lines.length && /\n/.test(delim) ? br(joinLines(lines, /,/.test(delim) ? CO : '', level, bracket), bracket) : br(lines.join(delim), bracket);

export { joinLines, liner, pipeQuote, quoteString };
