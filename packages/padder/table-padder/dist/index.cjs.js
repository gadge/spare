'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var lange = require('@spare/lange');
var padder = require('@spare/padder');
var columnsIndicator = require('@vect/columns-indicator');
var matrixZipper = require('@vect/matrix-zipper');
var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var fullwidth = require('@spare/fullwidth');
var matrixTranspose = require('@vect/matrix-transpose');
var vector = require('@vect/vector');
var vectorIndicator = require('@vect/vector-indicator');

/**
 *
 * @param {string[][]} text
 * @param {*[][]} head
 * @param {*[][]} [raw]
 * @param {function[][]} [dye]
 * @param {boolean=false} [ansi]
 * @param {string} [dash]
 * @param {string} [fwdash]
 * @param {string} [fill]
 * @param {string} [fwfill]
 * @return {{head: string[], rows: string[][], hr: string[]}}
 */

const tablePadderFullAngle = (text, head, {
  raw,
  dye,
  ansi = false,
  dash = enumChars.DA,
  fwdash = enumFullAngleChars.DASH,
  fill = enumChars.SP,
  fwfill = enumFullAngleChars.SP
} = {}) => {
  const columns = matrixTranspose.transpose([head].concat(text));
  const [pads, chns] = [vectorMapper.mapper(columns, vectorIndicator.Max(lange.Lange(ansi))), vectorMapper.mapper(columns, col => col.some(fullwidth.hasFullWidth))];
  const [padR, padN] = [padder.PadFW({
    dock: padder.RIGHT,
    ansi,
    fill,
    fwfill
  }), padder.PadFW({
    dock: padder.CENTRE,
    ansi,
    fill,
    fwfill
  })];
  return {
    head: vector.Trizipper(padR)(head, pads, chns),
    hr: vector.Duozipper((pad, cn) => (cn ? fwdash : dash).repeat(pad))(pads, chns),
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

const tablePadder = (text, head, {
  raw,
  dye,
  headDye,
  ansi = false,
  fullAngle = false
} = {}) => {
  if (fullAngle) return tablePadderFullAngle(text, head, {
    raw,
    dye,
    ansi
  });
  const padder$1 = padder.Pad({
    ansi
  });
  const pads = columnsIndicator.maxBy([head].concat(text), lange.Lange(ansi));
  return {
    head: headDye ? vectorZipper.Trizipper((x, d, p) => {
      var _padder;

      return _padder = padder$1(x, p), d(_padder);
    })(head, headDye, pads) : vectorZipper.Duozipper((x, p) => padder$1(x, p))(head, pads),
    hr: vectorMapper.mapper(pads, p => enumChars.DA.repeat(p)),
    rows: dye ? matrixZipper.Trizipper((x, v, d, i, j) => {
      var _padder2;

      return _padder2 = padder$1(x, pads[j], v), d(_padder2);
    })(text, raw, dye) : matrixZipper.Duozipper((x, v, i, j) => padder$1(x, pads[j], v))(text, raw)
  };
};

exports.tablePadder = tablePadder;