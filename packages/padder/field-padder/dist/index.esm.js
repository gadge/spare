import { max } from '@aryth/comparer';
import { DA } from '@spare/enum-chars';
import { DASH, SP } from '@spare/enum-full-angle-chars';
import { FullWidth } from '@spare/fullwidth';
import { Lange } from '@spare/lange';
import { LPad, RPad } from '@spare/padder';
import { maxBy } from '@vect/vector-indicator';
import { mapper } from '@vect/vector-mapper';
import { zipper } from '@vect/vector-zipper';

const HAN = /[\u4e00-\u9fa5]|[\uff00-\uffff]/; // HAN ideographs

const hasHan = HAN.test.bind(HAN);
const keyedColumnPadder = (side, title, {
  dye,
  ansi,
  fullAngle
} = {}) => {
  if (fullAngle) return keyedColumnPadderFullWidth(side, title, ansi);
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
    rule: DA.repeat(pad),
    side: dye ? zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : mapper(side, x => lpad(x, pad))
  };
};
const keyedColumnPadderFullWidth = (side, title, {
  dye,
  ansi,
  dash = DASH,
  fill = SP
} = {}) => {
  const fullWidth = FullWidth({
    ansi
  });
  const han = hasHan(title) || side.some(hasHan);
  if (!han) return keyedColumnPadder(side, title, {
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
    rule: dash.repeat(pad),
    side: dye ? zipper(side, dye, (x, d) => {
      var _lpad2;

      return _lpad2 = lpad(fullWidth(x), pad), d(_lpad2);
    }) : mapper(side, x => lpad(fullWidth(x), pad))
  };
};

export { keyedColumnPadder };
