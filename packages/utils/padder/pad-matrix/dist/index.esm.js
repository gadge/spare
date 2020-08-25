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
  const pad = Pad({
    ansi,
    fill
  });
  const wds = maxBy(text, len);
  let zipper;
  return dye ? (zipper = Trizipper((tx, va, dy, i, j) => {
    var _pad;

    return _pad = pad(tx, wds[j], va), dy(_pad);
  }), zipper(text, raw, dye)) : (zipper = Duozipper((tx, va, i, j) => pad(tx, wds[j], va)), zipper(text, raw));
};

export { padMatrix };
