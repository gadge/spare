import { Lange } from '@spare/lange';
import { Pad, RIGHT, CENTRE } from '@spare/pad-string';
import { maxBy } from '@vect/columns-indicator';
import { mapper } from '@vect/vector-mapper';
import { Trizipper as Trizipper$1, Duozipper as Duozipper$1 } from '@vect/matrix-zipper';
import { Trizipper as Trizipper$2, Duozipper as Duozipper$2 } from '@vect/vector-zipper';
import { DASH, SP } from '@spare/enum-full-angle-chars';
import { toFullAngle, hasChn } from '@spare/string';
import { Max } from '@vect/vector-indicator';
import { transpose } from '@vect/matrix-transpose';
import { Trizipper, Duozipper } from '@vect/vector';

const LocalPad = ({
  dock,
  ansi,
  fill,
  localFill
}) => {
  const padCn = Pad({
    dock,
    ansi,
    fill: localFill
  }),
        padEn = Pad({
    dock,
    ansi,
    fill
  });
  return (x, pd, cn, v) => cn ? padCn(toFullAngle(x), pd, v) : padEn(x, pd, v);
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
  localFill = SP
} = {}) => {
  const columns = transpose([head].concat(text));
  const [pads, chns] = [mapper(columns, Max(Lange(ansi))), mapper(columns, col => col.some(hasChn))];
  const [padR, padN] = [LocalPad({
    dock: RIGHT,
    ansi,
    fill,
    localFill
  }), LocalPad({
    dock: CENTRE,
    ansi,
    fill,
    localFill
  })];
  return {
    head: Trizipper(padR)(head, pads, chns),
    hr: Duozipper((pad, cn) => (cn ? localDash : dash).repeat(pad))(pads, chns),
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
    hr: mapper(pads, p => '-'.repeat(p)),
    rows: dye ? Trizipper$1((x, v, d, i, j) => {
      var _padder2;

      return _padder2 = padder(x, pads[j], v), d(_padder2);
    })(text, raw, dye) : Duozipper$1((x, v, i, j) => padder(x, pads[j], v))(text, raw)
  };
};

export { padTable };
