import { APOS, DITTO } from '@spare/enum-quotes';

const quote = x => '\'' + x + '\'';
const ditto = x => '\"' + x + '\"';
const qt = (x, mode = APOS) => {
  if (mode === APOS) return quote(x);
  if (mode === DITTO) return ditto(x);
  return x;
};

export { ditto, qt, quote };
