'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padder = require('@spare/padder');
var columnsIndicator = require('@vect/columns-indicator');
var matrixZipper = require('@vect/matrix-zipper');

const matrixPadder = (mx, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || mx;
  const len = ansi ? lange.lange : x => x.length;
  const pad = padder.Pad({
    ansi,
    fill
  });
  const wds = columnsIndicator.maxBy(mx, len);
  let zipper;
  return dye ? (zipper = matrixZipper.Trizipper((tx, va, dy, i, j) => {
    var _pad;

    return _pad = pad(tx, wds[j], va), dy(_pad);
  }), zipper(mx, raw, dye)) : (zipper = matrixZipper.Duozipper((tx, va, i, j) => pad(tx, wds[j], va)), zipper(mx, raw));
};

exports.matrixPadder = matrixPadder;
