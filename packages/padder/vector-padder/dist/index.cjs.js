'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padder = require('@spare/padder');
var vectorIndicator = require('@vect/vector-indicator');
var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');

const vectorPadder = (vec, {
  raw,
  dye,
  ansi,
  fill
}) => {
  const pad = padder.Pad({
    ansi,
    fill
  });
  const wd = vectorIndicator.maxBy(vec, lange.Lange(ansi));
  let zipper;
  return raw ? dye ? (zipper = vectorZipper.Trizipper((tx, va, dy) => {
    var _pad;

    return _pad = pad(tx, wd, va), dy(_pad);
  }), zipper(vec, raw, dye)) : (zipper = vectorZipper.Duozipper((tx, va) => pad(tx, wd, va)), zipper(vec, raw)) : dye ? (zipper = vectorZipper.Duozipper((tx, dy) => {
    var _pad2;

    return _pad2 = pad(tx, wd, tx), dy(_pad2);
  }), zipper(vec, dye)) : vectorMapper.mapper(vec, tx => pad(tx, wd, tx));
};

exports.vectorPadder = vectorPadder;
