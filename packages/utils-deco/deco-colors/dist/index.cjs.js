'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var convert = require('@palett/convert');
var dye = require('@palett/dye');
var objectMapper = require('@vect/object-mapper');
var cards = require('@palett/cards');

var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
const Dyes = {
  0: dye.Dye((_ref = [45, 100, 53], convert.hslToRgb(_ref))),
  1: dye.Dye((_ref2 = [44, 100, 59], convert.hslToRgb(_ref2))),
  2: dye.Dye((_ref3 = [43, 100, 64], convert.hslToRgb(_ref3))),
  3: dye.Dye((_ref4 = [42, 100, 70], convert.hslToRgb(_ref4))),
  4: dye.Dye((_ref5 = [41, 100, 74], convert.hslToRgb(_ref5))),
  5: dye.Dye((_ref6 = [40, 100, 78], convert.hslToRgb(_ref6))),
  6: dye.Dye((_ref7 = [39, 100, 82], convert.hslToRgb(_ref7))),
  7: dye.Dye((_ref8 = [37, 100, 86], convert.hslToRgb(_ref8)))
};
const L = '{ ',
      R = ' }';
const BRC = objectMapper.mapper(Dyes, dye => {
  var _L, _R;

  const l = (_L = L, dye(_L)),
        r = (_R = R, dye(_R));
  return content => l + content + r;
});

var _ref$1, _ref2$1, _ref3$1, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;
const Dyes$1 = {
  0: dye.Dye((_ref$1 = [199, 100, 63], convert.hslToRgb(_ref$1))),
  1: dye.Dye((_ref2$1 = [201, 100, 68], convert.hslToRgb(_ref2$1))),
  2: dye.Dye((_ref3$1 = [203, 100, 72], convert.hslToRgb(_ref3$1))),
  3: dye.Dye((_ref4$1 = [205, 100, 76], convert.hslToRgb(_ref4$1))),
  4: dye.Dye((_ref5$1 = [207, 100, 84], convert.hslToRgb(_ref5$1))),
  5: dye.Dye((_ref6$1 = [209, 100, 80], convert.hslToRgb(_ref6$1))),
  6: dye.Dye((_ref7$1 = [211, 100, 88], convert.hslToRgb(_ref7$1))),
  7: dye.Dye((_ref8$1 = [214, 100, 90], convert.hslToRgb(_ref8$1)))
};
const L$1 = '[ ',
      R$1 = ' ]';
const BRK = objectMapper.mapper(Dyes$1, dye => {
  var _L, _R;

  const l = (_L = L$1, dye(_L)),
        r = (_R = R$1, dye(_R));
  return content => l + content + r;
});

var _Cards$brown$lighten_, _Cards$lightGreen$acc, _Cards$deepOrange$acc, _Cards$teal$lighten_, _Cards$brown$lighten_2, _Cards$blueGrey$light, _Cards$blue$accent_, _Cards$amber$base, _Cards$green$accent_;
/**
 *
 * @type {Object<string,Function>}
 */

const PAL = {
  IDX: dye.Dye((_Cards$brown$lighten_ = cards.Cards.brown.lighten_5, convert.hexToRgb(_Cards$brown$lighten_))),
  STR: dye.Dye((_Cards$lightGreen$acc = cards.Cards.lightGreen.accent_2, convert.hexToRgb(_Cards$lightGreen$acc))),
  NUM: dye.Dye((_Cards$deepOrange$acc = cards.Cards.deepOrange.accent_2, convert.hexToRgb(_Cards$deepOrange$acc))),
  BOO: dye.Dye((_Cards$teal$lighten_ = cards.Cards.teal.lighten_2, convert.hexToRgb(_Cards$teal$lighten_))),
  UDF: dye.Dye((_Cards$brown$lighten_2 = cards.Cards.brown.lighten_3, convert.hexToRgb(_Cards$brown$lighten_2))),
  SYM: dye.Dye((_Cards$blueGrey$light = cards.Cards.blueGrey.lighten_2, convert.hexToRgb(_Cards$blueGrey$light))),
  BRK: dye.Dye((_Cards$blue$accent_ = cards.Cards.blue.accent_2, convert.hexToRgb(_Cards$blue$accent_))),
  BRC: dye.Dye((_Cards$amber$base = cards.Cards.amber.base, convert.hexToRgb(_Cards$amber$base))),
  FNC: dye.Dye((_Cards$green$accent_ = cards.Cards.green.accent_4, convert.hexToRgb(_Cards$green$accent_)))
};

const IDX = {
  0: {
    max: convert.hslToHex([75, 90, 85]),
    min: convert.hslToHex([89, 99, 72]),
    na: cards.Cards.grey.lighten_4
  },
  1: {
    max: convert.hslToHex([80, 88, 87]),
    min: convert.hslToHex([83, 98, 71]),
    na: cards.Cards.grey.lighten_4
  },
  2: {
    max: convert.hslToHex([93, 87, 82]),
    min: convert.hslToHex([93, 97, 70]),
    na: cards.Cards.grey.lighten_3
  },
  3: {
    max: convert.hslToHex([103, 86, 82]),
    min: convert.hslToHex([103, 96, 69]),
    na: cards.Cards.grey.lighten_2
  },
  4: {
    max: convert.hslToHex([113, 85, 82]),
    min: convert.hslToHex([113, 95, 68]),
    na: cards.Cards.grey.lighten_1
  },
  5: {
    max: convert.hslToHex([123, 84, 82]),
    min: convert.hslToHex([123, 94, 68]),
    na: cards.Cards.grey.base
  },
  6: {
    max: convert.hslToHex([133, 83, 82]),
    min: convert.hslToHex([133, 93, 68]),
    na: cards.Cards.grey.darken_1
  },
  7: {
    max: convert.hslToHex([143, 82, 82]),
    min: convert.hslToHex([143, 92, 68]),
    na: cards.Cards.grey.darken_2
  }
};

exports.BRC = BRC;
exports.BRK = BRK;
exports.IDX = IDX;
exports.PAL = PAL;
