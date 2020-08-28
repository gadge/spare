'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var columnsIndicator = require('@vect/columns-indicator');
var matrixZipper = require('@vect/matrix-zipper');

const padMatrix = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange.lange : x => x.length;
  const pad = padString.Pad({
    ansi,
    fill
  });
  const wds = columnsIndicator.maxBy(text, len);
  let zipper;
  return dye ? (zipper = matrixZipper.Trizipper((tx, va, dy, i, j) => {
    var _pad;

    return _pad = pad(tx, wds[j], va), dy(_pad);
  }), zipper(text, raw, dye)) : (zipper = matrixZipper.Duozipper((tx, va, i, j) => pad(tx, wds[j], va)), zipper(text, raw));
};

exports.padMatrix = padMatrix;
