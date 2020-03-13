'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var padString = require('@spare/pad-string');
var vectorZipper = require('@vect/vector-zipper');
var lange = require('@spare/lange');
var vectorIndicator = require('@vect/vector-indicator');

const padVector = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const padder = padString.Pad({
    ansi,
    fill
  });
  const pad = vectorIndicator.maxBy(text, lange.Lange(ansi));
  let zipper;
  return dye ? (zipper = vectorZipper.Trizipper((tx, v, d) => {
    var _padder;

    return _padder = padder(tx, pad, v), d(_padder);
  }), zipper(text, raw, dye)) : (zipper = vectorZipper.Duozipper((tx, v) => padder(tx, pad, v)), zipper(text, raw));
};

exports.padVector = padVector;
