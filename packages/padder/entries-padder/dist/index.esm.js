import { lange } from '@spare/lange';
import { Pad, LPad } from '@spare/padder';
import { maxBy } from '@vect/entries-indicator';
import { Trizipper, Duozipper } from '@vect/entries-zipper';

const entriesPadder = (entries, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || entries;
  const len = ansi ? lange : x => x.length;
  const [kwd, vwd] = maxBy(entries, len, len);
  const pad = Pad({
    ansi,
    fill
  }),
        lpad = LPad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = Trizipper((tx, va, dy) => {
    var _lpad;

    return _lpad = lpad(tx, kwd), dy(_lpad);
  }, (tx, va, dy) => {
    var _pad;

    return _pad = pad(tx, vwd, va), dy(_pad);
  }), zipper(entries, raw, dye)) : (zipper = Duozipper(tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va)), zipper(entries, raw));
};

export { entriesPadder };