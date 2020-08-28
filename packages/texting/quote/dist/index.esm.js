import { QT, DT } from '@spare/enum-chars';
import { APOS, DITTO } from '@spare/enum-quotes';
import { isString } from '@typen/literal';
import { nullish } from '@typen/nullish';

const quote = x => QT + x + QT;
const ditto = x => DT + x + DT;
const qt = (x, mode) => {
  if (mode === APOS || mode === QT) return quote(x);
  if (mode === DITTO || mode === DT) return ditto(x);
  if (!nullish(mode) && isString(mode)) return mode + x + mode;
  return x;
};

const Qt = mode => {
  if (mode === APOS || mode === QT) return quote;
  if (mode === DITTO || mode === DT) return ditto;
  return null;
}; // export const Qt = (read, mode) => {
//   if (!mode) return read
//   if (!read) return SelectQt(mode)
//   return x => x |> read |> SelectQt(mode)
// }

const VERGE_QUOTE = /^'(.*)'$/;
const QUOTE = /'/g;
const BACKSLASH_QUOTE = '\\\'';
const tenseQuote = x => VERGE_QUOTE.test(x) ? x.replace(VERGE_QUOTE, (_, x) => quote(x.replace(QUOTE, BACKSLASH_QUOTE))) : quote(x.replace(QUOTE, BACKSLASH_QUOTE));

export { Qt, ditto, qt, quote, tenseQuote };
