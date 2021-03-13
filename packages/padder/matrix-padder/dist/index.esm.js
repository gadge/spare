import { Pad } from '@spare/padder';
import { max } from '@aryth/comparer';
import { Lange } from '@spare/lange';
import { stat } from '@vect/columns-stat';

/**
 *
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {undefined}
 */
/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[]}
 */


const mapper = (mx, fn, h, w) => {
  var _mx$;

  h = h || (mx === null || mx === void 0 ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) === null || _mx$ === void 0 ? void 0 : _mx$.length);
  const tx = Array(h);

  for (let i = 0, j, r, tr; i < h; i++) for (tx[i] = tr = Array(w), r = mx[i], j = 0; j < w; j++) tr[j] = fn(r[j], i, j);

  return tx;
};

const widthsByColumns = (mx, ansi) => {
  const len = Lange(ansi);
  return stat.call({
    init: () => 0,
    acc: (a, b) => max(a, len(b))
  }, mx);
};

/**
 *
 * @param {string[][]} mx
 * @param {boolean} ansi
 * @param {string} fill
 * @returns {string[][]}
 */

const matrixPadder = (mx, {
  ansi,
  fill
}) => {
  const widths = widthsByColumns(mx, ansi);
  const pad = Pad({
    ansi,
    fill
  });
  return mapper(mx, (tx, i, j) => pad(tx, widths[j]));
}; // let zipper
// return dye
//   ? (zipper = Trizipper((tx, va, dy, i, j) => pad(tx, widths[j], va) |> dy),
//     zipper(mx, mx, dye))
//   : (zipper = Duozipper((tx, va, i, j) => pad(tx, widths[j], va)),
//     zipper(mx, mx))

export { matrixPadder, widthsByColumns };
