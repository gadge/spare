'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var charset = require('@spare/charset');
var lange = require('@spare/lange');
var numStrict = require('@typen/num-strict');
var fullwidth = require('@spare/fullwidth');

const ansiPadLength = (tx, pd) => charset.hasAnsi(tx) ? tx.length + pd - lange.lange(tx) : pd; // export const lpad = String.prototype.padStart
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
  const padder = !dock ? numStrict.isNumeric(v !== null && v !== void 0 ? v : thousand ? numericDeterminant(tx) : tx) ? lpad : rpad : dock < 0 ? lpad : rpad;
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

const SP = '　';

const PadFull = ({
  dock,
  ansi,
  fill,
  fillFull = SP
}) => {
  const padHalf = Pad({
    dock,
    ansi,
    fill
  }),
        padFull = Pad({
    dock,
    ansi,
    fill: fillFull
  }),
        toFull = fullwidth.FullWidth({
    ansi
  });
  return (word, width, full, raw) => full ? padFull(toFull(word), width, raw) : padHalf(word, width, raw);
};

const LEFT = -1;
const RIGHT = 1;
const CENTRE = 0;

exports.CENTRE = CENTRE;
exports.LEFT = LEFT;
exports.LPad = LPad;
exports.Pad = Pad;
exports.PadFull = PadFull;
exports.RIGHT = RIGHT;
exports.RPad = RPad;
