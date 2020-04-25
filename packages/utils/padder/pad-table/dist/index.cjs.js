'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var columnsIndicator = require('@vect/columns-indicator');
var vectorMapper = require('@vect/vector-mapper');
var matrixZipper = require('@vect/matrix-zipper');
var vectorZipper = require('@vect/vector-zipper');
var enumChars = require('@spare/enum-chars');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var matrixTranspose = require('@vect/matrix-transpose');
var vector = require('@vect/vector');
var vectorIndicator = require('@vect/vector-indicator');

const FWREG = /[\uff01-\uff5e|\u3000]+/g;
/**
 * Return if a string contains Chinese character.
 * halfAng = str.match(/[\u0000-\u00ff]/g) || [] //半角
 * chinese = str.match(/[\u4e00-\u9fa5]/g) || [] //中文
 * fullAng = str.match(/[\uff00-\uffff]/g) || [] //全角
 * @param {string} str
 * @returns {boolean}
 */


const hasFullWidth = str => FWREG.test(str);

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

const padTableFullAngle = (text, head, {
  raw,
  dye,
  ansi = false,
  dash = enumChars.DA,
  fwdash = enumFullAngleChars.DASH,
  fill = enumChars.SP,
  fwfill = enumFullAngleChars.SP
} = {}) => {
  const columns = matrixTranspose.transpose([head].concat(text));
  const [pads, chns] = [vectorMapper.mapper(columns, vectorIndicator.Max(lange.Lange(ansi))), vectorMapper.mapper(columns, col => col.some(hasFullWidth))];
  const [padR, padN] = [padString.PadFW({
    dock: padString.RIGHT,
    ansi,
    fill,
    fwfill
  }), padString.PadFW({
    dock: padString.CENTRE,
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
    hr: vectorMapper.mapper(pads, p => enumChars.DA.repeat(p)),
    rows: dye ? matrixZipper.Trizipper((x, v, d, i, j) => {
      var _padder2;

      return _padder2 = padder(x, pads[j], v), d(_padder2);
    })(text, raw, dye) : matrixZipper.Duozipper((x, v, i, j) => padder(x, pads[j], v))(text, raw)
  };
};

exports.padTable = padTable;
