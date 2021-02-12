import { max } from '@aryth/comparer';
import { DA, SP } from '@spare/enum-chars';
import { Lange } from '@spare/lange';
import { PadFW, RIGHT, CENTRE, Pad } from '@spare/padder';
import { Stat, stat } from '@vect/columns-stat';
import { mapper } from '@vect/matrix-mapper';
import { acquire } from '@vect/vector';
import { mapper as mapper$1 } from '@vect/vector-mapper';
import { zipper } from '@vect/vector-zipper';
import { DASH, SP as SP$1 } from '@spare/enum-full-angle-chars';
import { hasFullWidth } from '@spare/fullwidth';
import { transpose } from '@vect/matrix-transpose';

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
  dash = DA,
  fwdash = DASH,
  fill = SP,
  fwfill = SP$1
} = {}) => {
  var _acquire;

  const len = Lange(ansi);
  const columns = (_acquire = acquire([head], rows), transpose(_acquire));
  const widths = mapper$1(columns, Stat({
    init: () => 0,
    acc: (a, b) => max(a, b ? len(b) : 0)
  }));
  const checks = mapper$1(columns, col => col.some(hasFullWidth));
  const padR = PadFW({
    dock: RIGHT,
    ansi,
    fill,
    fwfill
  });
  const padN = PadFW({
    dock: CENTRE,
    ansi,
    fill,
    fwfill
  });
  return {
    head: zipper(head, widths, (value, width, j) => padR(value, width, checks[j])),
    rule: zipper(widths, checks, (width, check) => (check ? fwdash : dash).repeat(width)),
    rows: mapper(rows, (x, i, j) => padN(x, widths[j], checks[j], x))
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
  const padder = Pad({
    ansi
  });
  const len = Lange(ansi);
  const widths = stat.call({
    init: () => 0,
    acc: (a, b) => max(a, len(b))
  }, acquire([head], rows));
  return {
    head: zipper(head, widths, (x, p) => padder(x, p, x)),
    rule: mapper$1(widths, p => DA.repeat(p)),
    rows: mapper(rows, (x, i, j) => padder(x, widths[j], x))
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
