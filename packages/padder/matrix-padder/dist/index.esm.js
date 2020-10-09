import { lange } from '@spare/lange';
import { Pad } from '@spare/padder';
import { maxBy } from '@vect/columns-indicator';
import { Trizipper, Duozipper } from '@vect/matrix-zipper';

const matrixPadder = (mx, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || mx;
  const len = ansi ? lange : x => x.length;
  const pad = Pad({
    ansi,
    fill
  });
  const wds = maxBy(mx, len);
  let zipper;
  return dye ? (zipper = Trizipper((tx, va, dy, i, j) => {
    var _pad;

    return _pad = pad(tx, wds[j], va), dy(_pad);
  }), zipper(mx, raw, dye)) : (zipper = Duozipper((tx, va, i, j) => pad(tx, wds[j], va)), zipper(mx, raw));
};

export { matrixPadder };
