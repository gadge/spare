import { max } from '@aryth/comparer';
import { DA, SP } from '@spare/enum-chars';
import { Lange } from '@spare/lange';
import { PadFW, RIGHT, CENTRE, Pad } from '@spare/padder';
import { stat } from '@vect/columns-stat';
import { mapper as mapper$1 } from '@vect/matrix-mapper';
import { Trizipper, Duozipper, acquire } from '@vect/vector';
import { mapper } from '@vect/vector-mapper';
import { zipper } from '@vect/vector-zipper';
import { DASH, SP as SP$1 } from '@spare/enum-full-angle-chars';
import { hasFullWidth } from '@spare/fullwidth';
import { transpose } from '@vect/matrix-transpose';
import { Duozipper as Duozipper$1 } from '@vect/matrix-zipper';
import { Max } from '@vect/vector-indicator';

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
  raw,
  ansi = false,
  dash = DA,
  fwdash = DASH,
  fill = SP,
  fwfill = SP$1
} = {}) => {
  const columns = transpose([head].concat(rows));
  const [pads, chns] = [mapper(columns, Max(Lange(ansi))), mapper(columns, col => col.some(hasFullWidth))];
  const [padR, padN] = [PadFW({
    dock: RIGHT,
    ansi,
    fill,
    fwfill
  }), PadFW({
    dock: CENTRE,
    ansi,
    fill,
    fwfill
  })];
  return {
    head: Trizipper(padR)(head, pads, chns),
    rule: Duozipper((pad, cn) => (cn ? fwdash : dash).repeat(pad))(pads, chns),
    rows: Duozipper$1((x, v, i, j) => padN(x, pads[j], chns[j], v))(rows, raw)
  };
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
  ansi = false,
  fullAngle = false
} = {}) => {
  if (fullAngle) return tablePadderFullAngle({
    head,
    rows
  }, {
    raw,
    ansi
  });
  const padder = Pad({
    ansi
  });
  let len = Lange(ansi);
  const widths = stat.call({
    init: () => 0,
    acc: (a, b) => max(a, len(b))
  }, acquire([head], rows));
  return {
    head: zipper(head, widths, (x, p) => padder(x, p, x)),
    rule: mapper(widths, p => DA.repeat(p)),
    rows: mapper$1(rows, (x, i, j) => padder(x, widths[j], x))
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

export { tablePadder };
