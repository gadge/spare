import { hasAnsi } from '@spare/charset';
import { lange } from '@spare/lange';
import { isNumeric } from '@typen/num-strict';
import { FullWidth } from '@spare/fullwidth';

const ansiPadLength = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd;
const lpad = String.prototype.padStart;
const rpad = String.prototype.padEnd;

const LPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => lpad.call(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => lpad.call(tx, pd, fill);

const RPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => rpad.call(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => rpad.call(tx, pd, fill);

const Pad = ({
  dock,
  ansi = true,
  fill
} = {}) => {
  if (!dock) {
    return ansi ? (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, ansiPadLength(tx, pd), fill) : (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, pd, fill);
  }

  let padder = dock < 0 ? lpad : rpad;
  return ansi ? (tx, pd) => padder.call(tx, ansiPadLength(tx, pd), fill) : (tx, pd) => padder.call(tx, pd, fill);
};

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
