import { max } from '@aryth/comparer';
import { Lange } from '@spare/lange';
import { Pad } from '@spare/padder';
import { stat } from '@vect/columns-stat';
import { Trizipper, Duozipper } from '@vect/matrix-zipper';

const matrixPadder = (mx, {
  raw,
  dye,
  ansi = true,
  fill
}) => {
  const len = Lange(ansi);
  const widths = stat.call({
    init: () => 0,
    acc: (a, b) => max(a, len(b))
  }, mx);
  const pad = Pad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = Trizipper((tx, va, dy, i, j) => {
    var _pad;

    return _pad = pad(tx, widths[j], va), dy(_pad);
  }), zipper(mx, raw !== null && raw !== void 0 ? raw : mx, dye)) : (zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va)), zipper(mx, raw !== null && raw !== void 0 ? raw : mx));
};

export { matrixPadder };
