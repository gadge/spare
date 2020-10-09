import { Lange } from '@spare/lange';
import { Pad } from '@spare/padder';
import { maxBy } from '@vect/vector-indicator';
import { Trizipper, Duozipper } from '@vect/vector-zipper';

const vectorPadder = (vec, {
  raw,
  dye,
  ansi,
  fill
}) => {
  const pad = Pad({
    ansi,
    fill
  });
  const wd = maxBy(vec, Lange(ansi));
  let zipper;
  return raw ? dye ? (zipper = Trizipper((tx, va, dy) => {
    var _pad;

    return _pad = pad(tx, wd, va), dy(_pad);
  }), zipper(vec, raw, dye)) : (zipper = Duozipper((tx, va) => pad(tx, wd, va)), zipper(vec, raw)) : dye ? (zipper = Trizipper((tx, va, dy) => {
    var _pad2;

    return _pad2 = pad(tx, wd, va), dy(_pad2);
  }), zipper(vec, raw, dye)) : (zipper = Duozipper((tx, va) => pad(tx, wd, va)), zipper(vec, raw));
};

export { vectorPadder };
