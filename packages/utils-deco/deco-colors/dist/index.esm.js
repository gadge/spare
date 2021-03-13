import { hslToRgb, hexToRgb, hslToHex } from '@palett/convert';
import { Dye } from '@palett/dye';
import { mapper } from '@vect/object-mapper';
import { Cards } from '@palett/cards';

var _ref$1, _ref2$1, _ref3$1, _ref4$1, _ref5$1, _ref6$1, _ref7$1, _ref8$1;
const Dyes$1 = {
  0: Dye((_ref$1 = [45, 100, 53], hslToRgb(_ref$1))),
  1: Dye((_ref2$1 = [44, 100, 59], hslToRgb(_ref2$1))),
  2: Dye((_ref3$1 = [43, 100, 64], hslToRgb(_ref3$1))),
  3: Dye((_ref4$1 = [42, 100, 70], hslToRgb(_ref4$1))),
  4: Dye((_ref5$1 = [41, 100, 74], hslToRgb(_ref5$1))),
  5: Dye((_ref6$1 = [40, 100, 78], hslToRgb(_ref6$1))),
  6: Dye((_ref7$1 = [39, 100, 82], hslToRgb(_ref7$1))),
  7: Dye((_ref8$1 = [37, 100, 86], hslToRgb(_ref8$1)))
};
const L$1 = '{ ',
      R$1 = ' }';
const BRC = mapper(Dyes$1, dye => {
  var _L, _R;

  const l = (_L = L$1, dye(_L)),
        r = (_R = R$1, dye(_R));
  return content => l + content + r;
});

var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
const Dyes = {
  0: Dye((_ref = [199, 100, 63], hslToRgb(_ref))),
  1: Dye((_ref2 = [201, 100, 68], hslToRgb(_ref2))),
  2: Dye((_ref3 = [203, 100, 72], hslToRgb(_ref3))),
  3: Dye((_ref4 = [205, 100, 76], hslToRgb(_ref4))),
  4: Dye((_ref5 = [207, 100, 84], hslToRgb(_ref5))),
  5: Dye((_ref6 = [209, 100, 80], hslToRgb(_ref6))),
  6: Dye((_ref7 = [211, 100, 88], hslToRgb(_ref7))),
  7: Dye((_ref8 = [214, 100, 90], hslToRgb(_ref8)))
};
const L = '[ ',
      R = ' ]';
const BRK = mapper(Dyes, dye => {
  var _L, _R;

  const l = (_L = L, dye(_L)),
        r = (_R = R, dye(_R));
  return content => l + content + r;
});

var _Cards$brown$lighten_, _Cards$lightGreen$acc, _Cards$deepOrange$acc, _Cards$teal$lighten_, _Cards$brown$lighten_2, _Cards$blueGrey$light, _Cards$blue$accent_, _Cards$amber$base, _Cards$green$accent_;
/**
 *
 * @type {Object<string,Function>}
 */

const PAL = {
  IDX: Dye((_Cards$brown$lighten_ = Cards.brown.lighten_5, hexToRgb(_Cards$brown$lighten_))),
  STR: Dye((_Cards$lightGreen$acc = Cards.lightGreen.accent_2, hexToRgb(_Cards$lightGreen$acc))),
  NUM: Dye((_Cards$deepOrange$acc = Cards.deepOrange.accent_2, hexToRgb(_Cards$deepOrange$acc))),
  BOO: Dye((_Cards$teal$lighten_ = Cards.teal.lighten_2, hexToRgb(_Cards$teal$lighten_))),
  UDF: Dye((_Cards$brown$lighten_2 = Cards.brown.lighten_3, hexToRgb(_Cards$brown$lighten_2))),
  SYM: Dye((_Cards$blueGrey$light = Cards.blueGrey.lighten_2, hexToRgb(_Cards$blueGrey$light))),
  BRK: Dye((_Cards$blue$accent_ = Cards.blue.accent_2, hexToRgb(_Cards$blue$accent_))),
  BRC: Dye((_Cards$amber$base = Cards.amber.base, hexToRgb(_Cards$amber$base))),
  FNC: Dye((_Cards$green$accent_ = Cards.green.accent_4, hexToRgb(_Cards$green$accent_)))
};

const IDX = {
  0: {
    max: hslToHex([75, 90, 85]),
    min: hslToHex([89, 99, 72]),
    na: Cards.grey.lighten_4
  },
  1: {
    max: hslToHex([80, 88, 87]),
    min: hslToHex([83, 98, 71]),
    na: Cards.grey.lighten_4
  },
  2: {
    max: hslToHex([93, 87, 82]),
    min: hslToHex([93, 97, 70]),
    na: Cards.grey.lighten_3
  },
  3: {
    max: hslToHex([103, 86, 82]),
    min: hslToHex([103, 96, 69]),
    na: Cards.grey.lighten_2
  },
  4: {
    max: hslToHex([113, 85, 82]),
    min: hslToHex([113, 95, 68]),
    na: Cards.grey.lighten_1
  },
  5: {
    max: hslToHex([123, 84, 82]),
    min: hslToHex([123, 94, 68]),
    na: Cards.grey.base
  },
  6: {
    max: hslToHex([133, 83, 82]),
    min: hslToHex([133, 93, 68]),
    na: Cards.grey.darken_1
  },
  7: {
    max: hslToHex([143, 82, 82]),
    min: hslToHex([143, 92, 68]),
    na: Cards.grey.darken_2
  }
};

export { BRC, BRK, IDX, PAL };
