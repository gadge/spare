import { BRK, PAR, BRC, ANBR } from '@spare/enum-brackets';

const parenth = x => '(' + x + ')';
const bracket = x => '[' + x + ']';
const brace = x => '{' + x + '}';
const anglebr = x => '<' + x + '>';
const br = (x, mode = BRK) => {
  if (mode === PAR) return parenth(x);
  if (mode === BRK) return bracket(x);
  if (mode === BRC) return brace(x);
  if (mode === ANBR) return anglebr(x);
  return x;
};

export { anglebr, br, brace, bracket, parenth };
