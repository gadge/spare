import { Cards }  from '@palett/cards'
import { hexDye } from './dye.js'

/**
 *
 * @type {Object<string,Function>}
 */
export class PAL {
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
