'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padder = require('@spare/padder');
var vectorIndicator = require('@vect/vector-indicator');
var vectorMapper = require('@vect/vector-mapper');

/**
 *
 * @param {string[]} vec
 * @param {boolean} ansi
 * @param {string} fill
 * @returns {string[]}
 */

const vectorPadder = (vec, {
  ansi,
  fill
}) => {
  const padder$1 = padder.Pad({
    ansi,
    fill
  });
  const width = vectorIndicator.maxBy(vec, lange.Lange(ansi));
  return vectorMapper.mapper(vec, tx => padder$1(tx, width, tx)); // let zipper
  // return raw
  //   ? dye
  //     ? (zipper = Trizipper((tx, va, dy) => padder(tx, width, va) |> dy),
  //       zipper(vec, raw, dye))
  //     : (zipper = Duozipper((tx, va) => padder(tx, width, va)),
  //       zipper(vec, raw))
  //   : dye
  //     ? (zipper = Duozipper((tx, dy) => padder(tx, width, tx) |> dy),
  //       zipper(vec, dye))
  //     : (mapper(vec, tx => padder(tx, width, tx)))
};

exports.vectorPadder = vectorPadder;
