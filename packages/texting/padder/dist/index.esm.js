import { hasAnsi } from '@spare/charset';
import { lange } from '@spare/lange';
import { isNumeric } from '@typen/num-strict';
import { FullWidth } from '@spare/fullwidth';

const ansiPadLength = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd; // export const lpad = String.prototype.padStart
// export const rpad = String.prototype.padEnd

const lpad = Function.prototype.call.bind(String.prototype.padStart);
const LPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => lpad(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => lpad(tx, pd, fill);

const rpad = Function.prototype.call.bind(String.prototype.padEnd);
const RPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => rpad(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => rpad(tx, pd, fill);

const COMMA = /,/g;
const DIGIT_INITIAL = /^\d/;

const numericDeterminant = tx => {
  if (!tx || tx.length <= 4) return tx;
  if (!DIGIT_INITIAL.test(tx)) return tx;
  return tx.replace(COMMA, '');
};

const pad = function (tx, pd, v) {
  let dock, ansi, fill, thousand;
  if (this) ({
    dock,
    ansi,
    fill,
    thousand
  } = this);
  const padder = !dock ? isNumeric(v !== null && v !== void 0 ? v : thousand ? numericDeterminant(tx) : tx) ? lpad : rpad : dock < 0 ? lpad : rpad;
  return ansi ? padder(tx, ansiPadLength(tx, pd), fill) : padder(tx, pd, fill);
};
const Pad = ({
  dock,
  ansi = true,
  fill,
  thousand
} = {}) => pad.bind({
  dock,
  ansi,
  fill,
  thousand
});

const PadFW = ({
  dock,
  ansi,
  fill,
  fwfill
}) => {
  const padHW = Pad({
    dock,
    ansi,
    fill
  }),
        padFW = Pad({
    dock,
    ansi,
    fill: fwfill
  }),
        toFW = FullWidth({
    ansi
  });
  return (x, pd, fw, v) => fw ? padFW(toFW(x), pd, v) : padHW(x, pd, v);
};

const LEFT = -1;
const RIGHT = 1;
const CENTRE = 0;

export { CENTRE, LEFT, LPad, Pad, PadFW, RIGHT, RPad };
