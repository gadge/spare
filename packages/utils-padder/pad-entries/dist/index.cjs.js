'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var entriesIndicator = require('@vect/entries-indicator');
var entriesZipper = require('@vect/entries-zipper');

const padEntries = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange.lange : x => x.length;
  const [kwd, vwd] = entriesIndicator.maxBy(text, len, len);
  const pad = padString.Pad({
    ansi,
    fill
  }),
        lpad = padString.LPad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = entriesZipper.Trizipper((tx, va, dy) => {
    var _lpad;

    return _lpad = lpad(tx, kwd), dy(_lpad);
  }, (tx, va, dy) => {
    var _pad;

    return _pad = pad(tx, vwd, va), dy(_pad);
  }), zipper(text, raw, dye)) : (zipper = entriesZipper.Duozipper(tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va)), zipper(text, raw));
};

exports.padEntries = padEntries;
