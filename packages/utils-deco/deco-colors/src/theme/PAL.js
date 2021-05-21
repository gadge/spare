import { Cards } from '@palett/cards'
import { Dye }   from '@palett/dye'

/**
 *
 * @type {Object<string,Function>}
 */
export const PAL = {
  IDX: Dye.hex(Cards.brown.lighten_5),
  STR: Dye.hex(Cards.lightGreen.accent_2),
  NUM: Dye.hex(Cards.deepOrange.accent_2),
  BOO: Dye.hex(Cards.teal.lighten_2),
  UDF: Dye.hex(Cards.brown.lighten_3),
  SYM: Dye.hex(Cards.blueGrey.lighten_2),
  BRK: Dye.hex(Cards.blue.accent_2),
  BRC: Dye.hex(Cards.amber.base),
  FNC: Dye.hex(Cards.green.accent_4),
}
