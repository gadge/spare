import { DA, SP } from '@spare/enum-chars';
import { Lange } from '@spare/lange';
import { PadFW, RIGHT, CENTRE, Pad } from '@spare/pad-string';
import { maxBy } from '@vect/columns-indicator';
import { Trizipper as Trizipper$1, Duozipper as Duozipper$1 } from '@vect/matrix-zipper';
import { mapper } from '@vect/vector-mapper';
import { Trizipper as Trizipper$2, Duozipper as Duozipper$2 } from '@vect/vector-zipper';
import { DASH, SP as SP$1 } from '@spare/enum-full-angle-chars';
import { hasFullWidth } from '@spare/fullwidth';
import { transpose } from '@vect/matrix-transpose';
import { Trizipper, Duozipper } from '@vect/vector';
import { Max } from '@vect/vector-indicator';

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
  dash = DA,
  fwdash = DASH,
  fill = SP,
  fwfill = SP$1
} = {}) => {
  const columns = transpose([head].concat(text));
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
    hr: Duozipper((pad, cn) => (cn ? fwdash : dash).repeat(pad))(pads, chns),
    rows: dye ? Trizipper$1((x, v, d, i, j) => {
      var _padN;

      return _padN = padN(x, pads[j], chns[j], v), d(_padN);
    })(text, raw, dye) : Duozipper$1((x, v, i, j) => padN(x, pads[j], chns[j], v))(text, raw)
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
  const padder = Pad({
    ansi
  });
  const pads = maxBy([head].concat(text), Lange(ansi));
  return {
    head: headDye ? Trizipper$2((x, d, p) => {
      var _padder;

      return _padder = padder(x, p), d(_padder);
    })(head, headDye, pads) : Duozipper$2((x, p) => padder(x, p))(head, pads),
    hr: mapper(pads, p => DA.repeat(p)),
    rows: dye ? Trizipper$1((x, v, d, i, j) => {
      var _padder2;

      return _padder2 = padder(x, pads[j], v), d(_padder2);
    })(text, raw, dye) : Duozipper$1((x, v, i, j) => padder(x, pads[j], v))(text, raw)
  };
};

export { padTable };
