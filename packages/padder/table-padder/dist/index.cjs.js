'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');
var enumChars = require('@spare/enum-chars');
var lange = require('@spare/lange');
var padder = require('@spare/padder');
var columnsStat = require('@vect/columns-stat');
var matrixMapper = require('@vect/matrix-mapper');
var vector = require('@vect/vector');
var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var fullwidth = require('@spare/fullwidth');
var matrixTranspose = require('@vect/matrix-transpose');

/**
 *
 * @param {string[][]} rows
 * @param {*[]} head
 * @param {*[][]} [raw]
 * @param {function[][]} [dye]
 * @param {boolean=false} [ansi]
 * @param {string} [dash]
 * @param {string} [fwdash]
 * @param {string} [fill]
 * @param {string} [fwfill]
 * @return {{head: string[], rows: string[][], rule: string[]}}
 */

const tablePadderFullAngle = ({
  head,
  rows
}, {
  ansi = false,
  dash = enumChars.DA,
  fwdash = enumFullAngleChars.DASH,
  fill = enumChars.SP,
  fwfill = enumFullAngleChars.SP
} = {}) => {
  var _acquire;

  const len = lange.Lange(ansi);
  const columns = (_acquire = vector.acquire([head], rows), matrixTranspose.transpose(_acquire));
  const widths = vectorMapper.mapper(columns, columnsStat.Stat({
    init: () => 0,
    acc: (a, b) => comparer.max(a, b ? len(b) : 0)
  }));
  const checks = vectorMapper.mapper(columns, col => col.some(fullwidth.hasFullWidth));
  const padR = padder.PadFW({
    dock: padder.RIGHT,
    ansi,
    fill,
    fwfill
  });
  const padN = padder.PadFW({
    dock: padder.CENTRE,
    ansi,
    fill,
    fwfill
  });
  return {
    head: vectorZipper.zipper(head, widths, (value, width, j) => padR(value, width, checks[j])),
    rule: vectorZipper.zipper(widths, checks, (width, check) => (check ? fwdash : dash).repeat(width)),
    rows: matrixMapper.mapper(rows, (x, i, j) => padN(x, widths[j], checks[j], x))
  }; // const [widths, fwChecks] = [mapper(columns, Max(Lange(ansi))), mapper(columns, col => col.some(hasFullWidth))]
  // return {
  //   head: VecTriZip(padR)(head, widths, checks),
  //   rule: VecDuoZip((pad, cn) => (cn ? fwdash : dash).repeat(pad))(widths, checks),
  //   rows: MatDuoZip((x, v, i, j) => padN(x, widths[j], checks[j], v))(rows, raw)
  // }
};

/**
 *
 *
 * @param {*[]} head
 * @param {string[][]} rows
 * @param {*[][]} raw
 * @param {boolean=false} [ansi]
 * @param {boolean=false} [fullAngle]
 * @return {{head: string[], rule: string[], rows: string[][]}}
 */

const tablePadder = ({
  head,
  rows
}, {
  raw,
  ansi,
  fullAngle = false
} = {}) => {
  if (fullAngle) return tablePadderFullAngle({
    head,
    rows
  }, {
    raw,
    ansi
  });
  const padder$1 = padder.Pad({
    ansi
  });
  const len = lange.Lange(ansi);
  const widths = columnsStat.stat.call({
    init: () => 0,
    acc: (a, b) => comparer.max(a, len(b))
  }, vector.acquire([head], rows));
  return {
    head: vectorZipper.zipper(head, widths, (x, p) => padder$1(x, p, x)),
    rule: vectorMapper.mapper(widths, p => enumChars.DA.repeat(p)),
    rows: matrixMapper.mapper(rows, (x, i, j) => padder$1(x, widths[j], x))
  }; // return {
  //   head: headDye
  //     ? VecTriZip((x, d, p) => padder(x, p) |> d)(head, headDye, pads)
  //     : VecDuoZip((x, p) => padder(x, p))(head, pads),
  //   rule: mapper(pads, p => DA.repeat(p)),
  //   rows: dye
  //     ? MatTriZip((x, v, d, i, j) => padder(x, pads[j], v) |> d)(rows, raw ?? rows, dye)
  //     : MatDuoZip((x, v, i, j) => padder(x, pads[j], v))(rows, raw ?? rows)
  // }
};

exports.tablePadder = tablePadder;
