'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padder = require('@spare/padder');
var entriesIndicator = require('@vect/entries-indicator');
var entriesZipper = require('@vect/entries-zipper');

const entriesPadder = (entries, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || entries;
  const len = ansi ? lange.lange : x => x.length;
  const [kwd, vwd] = entriesIndicator.maxBy(entries, len, len);
  const pad = padder.Pad({
    ansi,
    fill
  }),
        lpad = padder.LPad({
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
  }), zipper(entries, raw, dye)) : (zipper = entriesZipper.Duozipper(tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va)), zipper(entries, raw));
};

exports.entriesPadder = entriesPadder;
