import { Pad } from '@spare/pad-string';
import { Trizipper, Duozipper } from '@vect/vector-zipper';
import { Lange } from '@spare/lange';
import { maxBy } from '@vect/vector-indicator';

const padVector = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const padder = Pad({
    ansi,
    fill
  });
  const pad = maxBy(text, Lange(ansi));
  let zipper;
  return dye ? (zipper = Trizipper((tx, v, d) => {
    var _padder;

    return _padder = padder(tx, pad, v), d(_padder);
  }), zipper(text, raw, dye)) : (zipper = Duozipper((tx, v) => padder(tx, pad, v)), zipper(text, raw));
};

export { padVector };
