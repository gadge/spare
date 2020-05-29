import { QT, DT } from '@spare/enum-chars';
import { APOS, DITTO } from '@spare/enum-quotes';

const quote = x => QT + x + QT;
const ditto = x => DT + x + DT;
const qt = (x, mode) => {
  if (mode === APOS) return quote(x);
  if (mode === DITTO) return ditto(x);
  return x;
};

const SelectQt = mode => {
  if (mode === APOS) return quote;
  if (mode === DITTO) return ditto;
  return null;
};
const Qt = (read, mode) => {
  if (!mode) return read;
  if (!read) return SelectQt(mode);
  return x => {
    var _ref, _x;

    return _ref = (_x = x, read(_x)), SelectQt(mode)(_ref);
  };
};

const DUALQT = /^'(.*)'$/;
const ANYQT = /'/g;
const CTQT = '\\\'';
const tenseQuote = x => DUALQT.test(x) ? x.replace(DUALQT, (_, x) => quote(x.replace(ANYQT, CTQT))) : quote(x.replace(ANYQT, CTQT));

export { Qt, ditto, qt, quote, tenseQuote };
