'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var numStrict = require('@typen/num-strict');
var fullwidth = require('@spare/fullwidth');

const ansiPadLength = (tx, pd) => lange.hasAnsi(tx) ? tx.length + pd - lange.lange(tx) : pd;
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
    return ansi ? (tx, pd, v) => (numStrict.isNumeric(v) ? lpad : rpad).call(tx, ansiPadLength(tx, pd), fill) : (tx, pd, v) => (numStrict.isNumeric(v) ? lpad : rpad).call(tx, pd, fill);
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
        toFW = fullwidth.FullWidth({
    ansi
  });
  return (x, pd, fw, v) => fw ? padFW(toFW(x), pd, v) : padHW(x, pd, v);
};

const LEFT = -1;
const RIGHT = 1;
const CENTRE = 0;

exports.CENTRE = CENTRE;
exports.LEFT = LEFT;
exports.LPad = LPad;
exports.Pad = Pad;
exports.PadFW = PadFW;
exports.RIGHT = RIGHT;
exports.RPad = RPad;
