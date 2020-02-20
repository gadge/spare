'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padString = require('@spare/pad-string');
var columnsIndicator = require('@vect/columns-indicator');
var Mapper = require('@vect/vector-mapper');
var matrixZipper = require('@vect/matrix-zipper');
var Zipper = require('@vect/vector-zipper');
var string = require('@spare/string');
var matrixTranspose = require('@vect/matrix-transpose');

const DASH = '－';
const SPACE = '　';

const max = (a, b) => a > b ? a : b;

const max$1 = function (vec) {
  const fn = this;
  return vec.reduce((p, x, i) => max(p, fn(x, i)), fn(vec[0], 0));
};

const Max = indicator => max$1.bind(indicator);

const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;

const LocalPad = ({
  dock,
  ansi,
  fill,
  localFill
}) => {
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
  return (x, pd, cn, v) => cn ? padCn(string.toFullAngle(x), pd, v) : padEn(x, pd, v);
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
  localDash = DASH,
  fill = ' ',
  localFill = SPACE
} = {}) => {
  const columns = matrixTranspose.transpose([head].concat(text));
  const [pads, chns] = [Mapper.mapper(columns, Max(lange.Lange(ansi))), Mapper.mapper(columns, col => col.some(string.hasChn))];
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
    head: Trizipper(padR)(head, pads, chns),
    hr: Duozipper((pad, cn) => (cn ? localDash : dash).repeat(pad))(pads, chns),
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
    head: headDye ? Zipper.Trizipper((x, d, p) => {
      var _padder;

      return _padder = padder(x, p), d(_padder);
    })(head, headDye, pads) : Zipper.Duozipper((x, p) => padder(x, p))(head, pads),
    hr: Mapper.mapper(pads, p => '-'.repeat(p)),
    rows: dye ? matrixZipper.Trizipper((x, v, d, i, j) => {
      var _padder2;

      return _padder2 = padder(x, pads[j], v), d(_padder2);
    })(text, raw, dye) : matrixZipper.Duozipper((x, v, i, j) => padder(x, pads[j], v))(text, raw)
  };
};

exports.padTable = padTable;
