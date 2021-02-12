'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');
var lange = require('@spare/lange');
var padder = require('@spare/padder');
var columnsStat = require('@vect/columns-stat');
var matrixZipper = require('@vect/matrix-zipper');

const matrixPadder = (mx, {
  raw,
  dye,
  ansi = true,
  fill
}) => {
  const len = lange.Lange(ansi);
  const widths = columnsStat.stat.call({
    init: () => 0,
    acc: (a, b) => comparer.max(a, len(b))
  }, mx);
  const pad = padder.Pad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = matrixZipper.Trizipper((tx, va, dy, i, j) => {
    var _pad;

    return _pad = pad(tx, widths[j], va), dy(_pad);
  }), zipper(mx, raw !== null && raw !== void 0 ? raw : mx, dye)) : (zipper = matrixZipper.Duozipper((tx, va, i, j) => pad(tx, widths[j], va)), zipper(mx, raw !== null && raw !== void 0 ? raw : mx));
};

exports.matrixPadder = matrixPadder;
