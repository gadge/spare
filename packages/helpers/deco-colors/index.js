import { HslDye, HexDye } from '@palett/dye';
import { Cards } from '@palett/cards';

const hslDye = new HslDye();
const hexDye = new HexDye();

function brc(text) {
  return this.head + '{ ' + this.tail + text + this.head + ' }' + this.tail
}

class BRC {
  static '0' = brc.bind(hslDye.into([ 45, 100, 53 ]))
  static '1' = brc.bind(hslDye.into([ 44, 100, 59 ]))
  static '2' = brc.bind(hslDye.into([ 43, 100, 64 ]))
  static '3' = brc.bind(hslDye.into([ 42, 100, 70 ]))
  static '4' = brc.bind(hslDye.into([ 41, 100, 74 ]))
  static '5' = brc.bind(hslDye.into([ 40, 100, 78 ]))
  static '6' = brc.bind(hslDye.into([ 39, 100, 82 ]))
  static '7' = brc.bind(hslDye.into([ 37, 100, 86 ]))
}

function brk(text) {
  return this.head + '[ ' + this.tail + text + this.head + ' ]' + this.tail
}

class BRK {
  static '0' = brk.bind(hslDye.into([ 199, 100, 63 ]))
  static '1' = brk.bind(hslDye.into([ 201, 100, 68 ]))
  static '2' = brk.bind(hslDye.into([ 203, 100, 72 ]))
  static '3' = brk.bind(hslDye.into([ 205, 100, 76 ]))
  static '4' = brk.bind(hslDye.into([ 207, 100, 84 ]))
  static '5' = brk.bind(hslDye.into([ 209, 100, 80 ]))
  static '6' = brk.bind(hslDye.into([ 211, 100, 88 ]))
  static '7' = brk.bind(hslDye.into([ 214, 100, 90 ]))
}

/**
 *
 * @type {Object<string,Function>}
 */
class PAL {
  static IDX = hexDye.make(Cards.brown.lighten_5)
  static STR = hexDye.make(Cards.lightGreen.accent_2)
  static NUM = hexDye.make(Cards.deepOrange.accent_2)
  static BOO = hexDye.make(Cards.teal.lighten_2)
  static UDF = hexDye.make(Cards.brown.lighten_3)
  static SYM = hexDye.make(Cards.blueGrey.lighten_2)
  static BRK = hexDye.make(Cards.blue.accent_2)
  static BRC = hexDye.make(Cards.amber.base)
  static FNC = hexDye.make(Cards.green.accent_4)
}

export { BRC, BRK, PAL };
