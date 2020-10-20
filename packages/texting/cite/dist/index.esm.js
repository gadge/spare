import { tenseQuote } from '@spare/quote';
import { makeReplaceable } from '@spare/translator';

var _ref;
const REG_CR = /\r/g;
const BACKSLASH_CR = '\\r';
const REG_LF = /\n/g;
const BACKSLASH_LF = '\\n';
const dictionary = (_ref = [[REG_CR, BACKSLASH_CR], [REG_LF, BACKSLASH_LF]], makeReplaceable(_ref));
const cite = text => {
  text = tenseQuote(text);
  return text.replace(dictionary);
};

export { cite };
