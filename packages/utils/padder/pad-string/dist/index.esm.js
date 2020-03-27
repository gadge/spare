import { hasAnsi, lange } from '@spare/lange';
import { isNumeric } from '@typen/num-strict';

const fixpad = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd;
const lpad = String.prototype.padStart;
const rpad = String.prototype.padEnd;

const LPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => lpad.call(tx, fixpad(tx, pd), fill) : (tx, pd) => lpad.call(tx, pd, fill);

const RPad = ({
  ansi = true,
  fill
} = {}) => ansi ? (tx, pd) => rpad.call(tx, fixpad(tx, pd), fill) : (tx, pd) => rpad.call(tx, pd, fill);

const Pad = ({
  dock,
  ansi = true,
  fill
} = {}) => {
  if (!dock) {
    return ansi ? (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, fixpad(tx, pd), fill) : (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, pd, fill);
  }

  let padder = dock < 0 ? lpad : rpad;
  return ansi ? (tx, pd) => padder.call(tx, fixpad(tx, pd), fill) : (tx, pd) => padder.call(tx, pd, fill);
};

const LEFT = -1;
const RIGHT = 1;
const CENTRE = 0;

export { CENTRE, LEFT, LPad, Pad, RIGHT, RPad };
