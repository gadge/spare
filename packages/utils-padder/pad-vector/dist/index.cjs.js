'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var vectorIndicator = require('@vect/vector-indicator');
var vectorZipper = require('@vect/vector-zipper');

const padVector = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  var _raw;

  raw = (_raw = raw) !== null && _raw !== void 0 ? _raw : text;
  const pad = padString.Pad({
    ansi,
    fill
  });
  const wd = vectorIndicator.maxBy(text, lange.Lange(ansi));
  let zipper;
  return dye ? (zipper = vectorZipper.Trizipper((tx, va, dy) => {
    var _pad;

    return _pad = pad(tx, wd, va), dy(_pad);
  }), zipper(text, raw, dye)) : (zipper = vectorZipper.Duozipper((tx, va) => pad(tx, wd, va)), zipper(text, raw));
};

exports.padVector = padVector;
