'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padder = require('@spare/padder');
var matrixZipper = require('@vect/matrix-zipper');

const max = (a, b) => a > b ? a : b;

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

/**
 * Create an array.
 * @param {number} size Integer starts at zero.
 * @param {function(number):*|*} [fn] defines how index i corresponds to value(i).
 * @returns {*[]}
 */


const init = (size, fn) => {
  if (size === (size & 0x7f)) {
    let arr = [];

    for (let i = 0; i < size; i++) arr[i] = fn(i);

    return arr;
  }

  return Array(size).fill(null).map((_, i) => fn(i));
};

const stat = function (mx) {
  const [h, w] = size(mx);
  const {
    init: init$1,
    acc,
    to
  } = this;
  let i = 0,
      vec = init$1 ? init(w, init$1) : mx[i++].slice();

  for (; i < h; i++) for (let row = mx[i], j = 0; j < w; j++) vec[j] = acc(vec[j], row[j], i, j);

  return to ? to(vec, h, w) : vec;
};

const matrixPadder = (mx, {
  raw,
  dye,
  ansi,
  fill
}) => {
  const len = lange.Lange(ansi);
  const widths = stat.call({
    init: () => 0,
    acc: (a, b) => max(a, len(b))
  }, mx);
  const pad = padder.Pad({
    ansi,
    fill
  });
  let zipper;
  return dye ? (zipper = matrixZipper.Trizipper((tx, va, dy, i, j) => {
    var _pad;

    return _pad = pad(tx, widths[j], va), dy(_pad);
  }), zipper(mx, raw !== null && raw !== void 0 ? raw : mx, dye)) : (zipper = matrixZipper.Duozipper((tx, va, i, j) => pad(tx, widths[j], va)), zipper(mx, raw !== null && raw !== void 0 ? raw : mx));
};

exports.matrixPadder = matrixPadder;
