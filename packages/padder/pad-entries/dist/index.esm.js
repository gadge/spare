import { Pad, LPad } from '@spare/pad-string';
import { Trizipper, Duozipper } from '@vect/entries-zipper';
import { lange } from '@spare/lange';
import { maxBy } from '@vect/entries-indicator';

const padEntries = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange : x => x.length;
  const [kpad, vpad] = maxBy(text, len, len);
  const padder = Pad({
    ansi,
    fill
  }),
        lp = LPad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = Trizipper((t, v, d) => {
    var _lp;

    return _lp = lp(t, kpad), d(_lp);
  }, (t, v, d) => {
    var _padder;

    return _padder = padder(t, vpad, v), d(_padder);
  }), zipper(text, raw, dye)) : (zipper = Duozipper(t => lp(t, kpad), (t, v) => padder(t, vpad, v)), zipper(text, raw));
};

export { padEntries };
