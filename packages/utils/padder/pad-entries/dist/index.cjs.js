'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var padString = require('@spare/pad-string');
var entriesZipper = require('@vect/entries-zipper');
var lange = require('@spare/lange');
var entriesIndicator = require('@vect/entries-indicator');

const padEntries = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange.lange : x => x.length;
  const [kpad, vpad] = entriesIndicator.maxBy(text, len, len);
  const padder = padString.Pad({
    ansi,
    fill
  }),
        lp = padString.LPad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = entriesZipper.Trizipper((t, v, d) => {
    var _lp;

    return _lp = lp(t, kpad), d(_lp);
  }, (t, v, d) => {
    var _padder;

    return _padder = padder(t, vpad, v), d(_padder);
  }), zipper(text, raw, dye)) : (zipper = entriesZipper.Duozipper(t => lp(t, kpad), (t, v) => padder(t, vpad, v)), zipper(text, raw));
};

exports.padEntries = padEntries;
