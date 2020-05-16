'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ripper = function (text) {
  const reg = this;
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = reg.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = reg.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};
/**
 *
 * @param {RegExp} reg
 * @return {Function}
 */

const Ripper = reg => ripper.bind(reg);

exports.Ripper = Ripper;
exports.ripper = ripper;
