import { APOS, DITTO } from '@spare/enum-quotes';

const quote = x => '\'' + x + '\'';
const ditto = x => '\"' + x + '\"';
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
  const qt = SelectQt(mode);
  if (!mode) return read;
  if (!read) return qt;
  return x => {
    var _ref, _x;

    return _ref = (_x = x, read(_x)), qt(_ref);
  };
};

export { Qt, ditto, qt, quote };
