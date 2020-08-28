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

const Br = mode => {
  if (mode === PAR) return parenth;
  if (mode === BRK) return bracket;
  if (mode === BRC) return brace;
  if (mode === ANBR) return anglebr;
  return mode ? bracket : null;
}; // export const Br = (read, mode) => {
//   if (!mode) return read
//   if (!read) return Br(mode)
//   return x => x |> read |> Br(mode)
// }

export { Br, anglebr, br, brace, bracket, parenth };
