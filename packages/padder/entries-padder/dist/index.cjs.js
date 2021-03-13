'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lange = require('@spare/lange');
var padder = require('@spare/padder');
var entriesIndicator = require('@vect/entries-indicator');
var entriesMapper = require('@vect/entries-mapper');

/**
 *
 * @param {string[][]} entries
 * @param {boolean} ansi
 * @param {string} fill
 * @returns {string[][]}
 */

const entriesPadder = (entries, {
  ansi,
  fill
}) => {
  const lange$1 = lange.Lange(ansi);
  const [kwd, vwd] = entriesIndicator.maxBy(entries, lange$1, lange$1);
  const pad = padder.Pad({
    ansi,
    fill
  }),
        lpad = padder.LPad({
    ansi,
    fill
  });
  return entriesMapper.mapper(entries, tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va));
}; // raw = raw || entries
// let zipper
// return dye
//   ? (zipper = Trizipper((tx, va, dy) => lpad(tx, kwd) |> dy, (tx, va, dy) => pad(tx, vwd, va) |> dy),
//     zipper(entries, raw, dye))
//   : (zipper = Duozipper(tx => lpad(tx, kwd), (tx, va) => pad(tx, vwd, va)),
//     zipper(entries, raw))

exports.entriesPadder = entriesPadder;
