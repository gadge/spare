import { Lange } from '@spare/lange';
import { Pad } from '@spare/pad-string';
import { maxBy } from '@vect/vector-indicator';
import { Trizipper, Duozipper } from '@vect/vector-zipper';

const padVector = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  var _raw;

  raw = (_raw = raw) !== null && _raw !== void 0 ? _raw : text;
  const pad = Pad({
    ansi,
    fill
  });
  const wd = maxBy(text, Lange(ansi));
  let zipper;
  return dye ? (zipper = Trizipper((tx, va, dy) => {
    var _pad;

    return _pad = pad(tx, wd, va), dy(_pad);
  }), zipper(text, raw, dye)) : (zipper = Duozipper((tx, va) => pad(tx, wd, va)), zipper(text, raw));
};

export { padVector };
