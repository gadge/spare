import { lange } from '@spare/lange';
import { Pad } from '@spare/pad-string';
import { maxBy } from '@vect/columns-indicator';
import { Trizipper, Duozipper } from '@vect/matrix-zipper';

const padMatrix = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange : x => x.length;
  const padder = Pad({
    ansi,
    fill
  });
  const pads = maxBy(text, len);
  let zipper;
  return dye ? (zipper = Trizipper((tx, v, d, i, j) => {
    var _padder;

    return _padder = padder(tx, pads[j], v), d(_padder);
  }), zipper(text, raw, dye)) : (zipper = Duozipper((tx, v, i, j) => padder(tx, pads[j], v)), zipper(text, raw));
};

export { padMatrix };
