import { max } from '@aryth/comparer';
import { DA } from '@spare/enum-chars';
import { DASH, SP } from '@spare/enum-full-angle-chars';
import { FullWidth } from '@spare/fullwidth';
import { Lange } from '@spare/lange';
import { LPad, RPad } from '@spare/pad-string';
import { hasChn } from '@spare/string';
import { maxBy } from '@vect/vector-indicator';
import { mapper } from '@vect/vector-mapper';
import { zipper } from '@vect/vector-zipper';

const padKeyedColumn = (side, title, {
  dye,
  ansi,
  fullAngle
} = {}) => {
  if (fullAngle) return padKeyedColumnFullWidth(side, title, ansi);
  const lpad = LPad({
    ansi
  }),
        rpad = RPad({
    ansi
  }),
        lange = Lange(ansi);
  const pad = max(lange(title), maxBy(side, lange));
  return {
    title: rpad(title, pad),
    hr: DA.repeat(pad),
    side: dye ? zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : mapper(side, x => lpad(x, pad))
  };
};
const padKeyedColumnFullWidth = (side, title, {
  dye,
  ansi,
  dash = DASH,
  fill = SP
} = {}) => {
  const fullWidth = FullWidth({
    ansi
  });
  const cn = hasChn(title) || side.some(hasChn);
  if (!cn) return padKeyedColumn(side, title, {
    ansi
  });
  const lpad = LPad({
    ansi,
    fill
  }),
        rpad = RPad({
    ansi,
    fill
  }),
        lange = Lange(ansi);
  const pad = max(lange(title), maxBy(side, lange));
  return {
    title: rpad(fullWidth(title), pad),
    hr: dash.repeat(pad),
    side: dye ? zipper(side, dye, (x, d) => {
      var _lpad2;

      return _lpad2 = lpad(fullWidth(x), pad), d(_lpad2);
    }) : mapper(side, x => lpad(fullWidth(x), pad))
  };
};

export { padKeyedColumn };
