'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');
var enumChars = require('@spare/enum-chars');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var fullwidth = require('@spare/fullwidth');
var lange = require('@spare/lange');
var padder = require('@spare/padder');
var vectorIndicator = require('@vect/vector-indicator');
var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');

const HAN = /[\u4e00-\u9fa5]|[\uff00-\uffff]/; // HAN ideographs

const hasHan = HAN.test.bind(HAN);
const padKeyedColumn = (side, title, {
  dye,
  ansi,
  fullAngle
} = {}) => {
  if (fullAngle) return padKeyedColumnFullWidth(side, title, ansi);
  const lpad = padder.LPad({
    ansi
  }),
        rpad = padder.RPad({
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
  const han = hasHan(title) || side.some(hasHan);
  if (!han) return padKeyedColumn(side, title, {
    ansi
  });
  const lpad = padder.LPad({
    ansi,
    fill
  }),
        rpad = padder.RPad({
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
