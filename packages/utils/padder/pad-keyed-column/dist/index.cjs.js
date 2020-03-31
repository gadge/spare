'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var padString = require('@spare/pad-string');
var lange = require('@spare/lange');
var comparer = require('@aryth/comparer');
var vectorIndicator = require('@vect/vector-indicator');
var enumChars = require('@spare/enum-chars');
var vectorZipper = require('@vect/vector-zipper');
var vectorMapper = require('@vect/vector-mapper');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var string = require('@spare/string');
var fullwidth = require('@spare/fullwidth');

const padKeyedColumn = (side, title, {
  dye,
  ansi,
  fullAngle
} = {}) => {
  if (fullAngle) return padKeyedColumnFullWidth(side, title, ansi);
  const lpad = padString.LPad({
    ansi
  }),
        rpad = padString.RPad({
    ansi
  }),
        lange$1 = lange.Lange(ansi);
  const pad = comparer.max(lange$1(title), vectorIndicator.maxBy(side, lange$1));
  return {
    title: rpad(title, pad),
    hr: enumChars.DA.repeat(pad),
    side: dye ? vectorZipper.zipper(side, dye, (x, d) => {
      var _lpad;

      return _lpad = lpad(x, pad), d(_lpad);
    }) : vectorMapper.mapper(side, x => lpad(x, pad))
  };
};
const padKeyedColumnFullWidth = (side, title, {
  dye,
  ansi,
  dash = enumFullAngleChars.DASH,
  fill = enumFullAngleChars.SP
} = {}) => {
  const fullWidth = fullwidth.FullWidth({
    ansi
  });
  const cn = string.hasChn(title) || side.some(string.hasChn);
  if (!cn) return padKeyedColumn(side, title, {
    ansi
  });
  const lpad = padString.LPad({
    ansi,
    fill
  }),
        rpad = padString.RPad({
    ansi,
    fill
  }),
        lange$1 = lange.Lange(ansi);
  const pad = comparer.max(lange$1(title), vectorIndicator.maxBy(side, lange$1));
  return {
    title: rpad(fullWidth(title), pad),
    hr: dash.repeat(pad),
    side: dye ? vectorZipper.zipper(side, dye, (x, d) => {
      var _lpad2;

      return _lpad2 = lpad(fullWidth(x), pad), d(_lpad2);
    }) : vectorMapper.mapper(side, x => lpad(fullWidth(x), pad))
  };
};

exports.padKeyedColumn = padKeyedColumn;
