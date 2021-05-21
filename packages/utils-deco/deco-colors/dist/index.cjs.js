'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dye = require('@palett/dye');
var objectMapper = require('@vect/object-mapper');
var cards = require('@palett/cards');
var convert = require('@palett/convert');

const Dyes$1 = {
  0: dye.Dye.hsl([45, 100, 53]),
  1: dye.Dye.hsl([44, 100, 59]),
  2: dye.Dye.hsl([43, 100, 64]),
  3: dye.Dye.hsl([42, 100, 70]),
  4: dye.Dye.hsl([41, 100, 74]),
  5: dye.Dye.hsl([40, 100, 78]),
  6: dye.Dye.hsl([39, 100, 82]),
  7: dye.Dye.hsl([37, 100, 86])
};
const L$1 = '{ ',
      R$1 = ' }';
const BRC = objectMapper.mapper(Dyes$1, dye => {
  var _L, _R;

  const l = (_L = L$1, dye(_L)),
        r = (_R = R$1, dye(_R));
  return content => l + content + r;
});

const Dyes = {
  0: dye.Dye.hsl([199, 100, 63]),
  1: dye.Dye.hsl([201, 100, 68]),
  2: dye.Dye.hsl([203, 100, 72]),
  3: dye.Dye.hsl([205, 100, 76]),
  4: dye.Dye.hsl([207, 100, 84]),
  5: dye.Dye.hsl([209, 100, 80]),
  6: dye.Dye.hsl([211, 100, 88]),
  7: dye.Dye.hsl([214, 100, 90])
};
const L = '[ ',
      R = ' ]';
const BRK = objectMapper.mapper(Dyes, dye => {
  var _L, _R;

  const l = (_L = L, dye(_L)),
        r = (_R = R, dye(_R));
  return content => l + content + r;
});

/**
 *
 * @type {Object<string,Function>}
 */

const PAL = {
  IDX: dye.Dye.hex(cards.Cards.brown.lighten_5),
  STR: dye.Dye.hex(cards.Cards.lightGreen.accent_2),
  NUM: dye.Dye.hex(cards.Cards.deepOrange.accent_2),
  BOO: dye.Dye.hex(cards.Cards.teal.lighten_2),
  UDF: dye.Dye.hex(cards.Cards.brown.lighten_3),
  SYM: dye.Dye.hex(cards.Cards.blueGrey.lighten_2),
  BRK: dye.Dye.hex(cards.Cards.blue.accent_2),
  BRC: dye.Dye.hex(cards.Cards.amber.base),
  FNC: dye.Dye.hex(cards.Cards.green.accent_4)
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
