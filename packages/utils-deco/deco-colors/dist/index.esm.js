import { Dye } from '@palett/dye';
import { mapper } from '@vect/object-mapper';
import { Cards } from '@palett/cards';
import { hslToHex } from '@palett/convert';

const Dyes$1 = {
  0: Dye.hsl([45, 100, 53]),
  1: Dye.hsl([44, 100, 59]),
  2: Dye.hsl([43, 100, 64]),
  3: Dye.hsl([42, 100, 70]),
  4: Dye.hsl([41, 100, 74]),
  5: Dye.hsl([40, 100, 78]),
  6: Dye.hsl([39, 100, 82]),
  7: Dye.hsl([37, 100, 86])
};
const L$1 = '{ ',
      R$1 = ' }';
const BRC = mapper(Dyes$1, dye => {
  var _L, _R;

  const l = (_L = L$1, dye(_L)),
        r = (_R = R$1, dye(_R));
  return content => l + content + r;
});

const Dyes = {
  0: Dye.hsl([199, 100, 63]),
  1: Dye.hsl([201, 100, 68]),
  2: Dye.hsl([203, 100, 72]),
  3: Dye.hsl([205, 100, 76]),
  4: Dye.hsl([207, 100, 84]),
  5: Dye.hsl([209, 100, 80]),
  6: Dye.hsl([211, 100, 88]),
  7: Dye.hsl([214, 100, 90])
};
const L = '[ ',
      R = ' ]';
const BRK = mapper(Dyes, dye => {
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
  IDX: Dye.hex(Cards.brown.lighten_5),
  STR: Dye.hex(Cards.lightGreen.accent_2),
  NUM: Dye.hex(Cards.deepOrange.accent_2),
  BOO: Dye.hex(Cards.teal.lighten_2),
  UDF: Dye.hex(Cards.brown.lighten_3),
  SYM: Dye.hex(Cards.blueGrey.lighten_2),
  BRK: Dye.hex(Cards.blue.accent_2),
  BRC: Dye.hex(Cards.amber.base),
  FNC: Dye.hex(Cards.green.accent_4)
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
