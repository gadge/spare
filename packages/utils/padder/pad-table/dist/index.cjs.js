'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var columnsIndicator = require('@vect/columns-indicator');
var vectorMapper = require('@vect/vector-mapper');
var matrixZipper = require('@vect/matrix-zipper');
var vectorZipper = require('@vect/vector-zipper');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var string = require('@spare/string');
var vectorIndicator = require('@vect/vector-indicator');
var matrixTranspose = require('@vect/matrix-transpose');
var vector = require('@vect/vector');

const LocalPad = ({
  dock,
  ansi,
  fill,
  localFill
}) => {
  const toFA = ansi ? string.toFullAngleWoAnsi : string.toFullAngle;
  const padCn = padString.Pad({
    dock,
    ansi,
    fill: localFill
  }),
        padEn = padString.Pad({
    dock,
    ansi,
    fill
  });
  return (x, pd, cn, v) => cn ? padCn(toFA(x), pd, v) : padEn(x, pd, v);
};

/**
 *
 * @param {string[][]} text
 * @param {*[][]} head
 * @param {*[][]} [raw]
 * @param {function[][]} [dye]
 * @param {boolean=false} [ansi]
 * @param dash
 * @param localDash
 * @param {string} [fill]
 * @param {string} [localFill]
 * @return {{head: string[], rows: string[][], hr: string[]}}
 */

const padTableFullAngle = (text, head, {
  raw,
  dye,
  ansi = false,
  dash = '-',
  localDash = enumFullAngleChars.DASH,
  fill = ' ',
  localFill = enumFullAngleChars.SP
} = {}) => {
  const columns = matrixTranspose.transpose([head].concat(text));
  const [pads, chns] = [vectorMapper.mapper(columns, vectorIndicator.Max(lange.Lange(ansi))), vectorMapper.mapper(columns, col => col.some(string.hasChn))];
  const [padR, padN] = [LocalPad({
    dock: padString.RIGHT,
    ansi,
    fill,
    localFill
  }), LocalPad({
    dock: padString.CENTRE,
    ansi,
    fill,
    localFill
  })];
  return {
    head: vector.Trizipper(padR)(head, pads, chns),
    hr: vector.Duozipper((pad, cn) => (cn ? localDash : dash).repeat(pad))(pads, chns),
    rows: dye ? matrixZipper.Trizipper((x, v, d, i, j) => {
      var _padN;

      return _padN = padN(x, pads[j], chns[j], v), d(_padN);
    })(text, raw, dye) : matrixZipper.Duozipper((x, v, i, j) => padN(x, pads[j], chns[j], v))(text, raw)
  };
};

//  *
//  *
//  * @param {string[][]} text
//  * @param {*[]} head
//  * @param {*[][]} raw
//  * @param {function[][]} [dye]
//  * @param {*[]} dyeHead
//  * @param {boolean=false} [ansi]
//  * @param {boolean=false} [fullAngle]
//  * @return {{head: string[], rows: string[][], hr: string[]}}
//  */

const padTable = (text, head, {
  raw,
  dye,
  headDye,
  ansi = false,
  fullAngle = false
} = {}) => {
  if (fullAngle) return padTableFullAngle(text, head, {
    raw,
    dye,
    ansi
  });
  const padder = padString.Pad({
    ansi
  });
  const pads = columnsIndicator.maxBy([head].concat(text), lange.Lange(ansi));
  return {
    head: headDye ? vectorZipper.Trizipper((x, d, p) => {
      var _padder;

      return _padder = padder(x, p), d(_padder);
    })(head, headDye, pads) : vectorZipper.Duozipper((x, p) => padder(x, p))(head, pads),
    hr: vectorMapper.mapper(pads, p => '-'.repeat(p)),
    rows: dye ? matrixZipper.Trizipper((x, v, d, i, j) => {
      var _padder2;

      return _padder2 = padder(x, pads[j], v), d(_padder2);
    })(text, raw, dye) : matrixZipper.Duozipper((x, v, i, j) => padder(x, pads[j], v))(text, raw)
  };
};

exports.padTable = padTable;
