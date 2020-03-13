'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var padString = require('@spare/pad-string');
var lange = require('@spare/lange');
var matrixZipper = require('@vect/matrix-zipper');
var columnsIndicator = require('@vect/columns-indicator');

const padMatrix = (text, {
  raw,
  dye,
  ansi,
  fill
}) => {
  raw = raw || text;
  const len = ansi ? lange.lange : x => x.length;
  const padder = padString.Pad({
    ansi,
    fill
  });
  const pads = columnsIndicator.maxBy(text, len);
  let zipper;
  return dye ? (zipper = matrixZipper.Trizipper((tx, v, d, i, j) => {
    var _padder;

    return _padder = padder(tx, pads[j], v), d(_padder);
  }), zipper(text, raw, dye)) : (zipper = matrixZipper.Duozipper((tx, v, i, j) => padder(tx, pads[j], v)), zipper(text, raw));
};

exports.padMatrix = padMatrix;
