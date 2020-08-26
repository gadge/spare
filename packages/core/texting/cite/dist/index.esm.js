import { tenseQuote } from '@spare/quote';

const REG_LF = /\n/g;
const BACKSLASH_LF = '\\n';
const cite = text => {
  text = tenseQuote(text);
  return text.replace(REG_LF, BACKSLASH_LF);
};

export { cite };
