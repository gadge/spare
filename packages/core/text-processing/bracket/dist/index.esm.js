import { PAR, BRK, BRC, ANBR } from '@spare/enum-brackets';

const parenth = x => '(' + x + ')';
const bracket = x => '[' + x + ']';
const brace = x => '{' + x + '}';
const anglebr = x => '<' + x + '>';
const br = (x, mode) => {
  if (mode === PAR) return parenth(x);
  if (mode === BRK) return bracket(x);
  if (mode === BRC) return brace(x);
  if (mode === ANBR) return anglebr(x);
  return x;
};

const SelectBr = mode => {
  if (mode === PAR) return parenth;
  if (mode === BRK) return bracket;
  if (mode === BRC) return brace;
  if (mode === ANBR) return anglebr;
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

export { Br, SelectBr, anglebr, br, brace, bracket, parenth };
