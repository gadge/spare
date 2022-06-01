import { Cards }  from '@palett/cards'
import { hexFab } from '../dye'

/**
 *
 * @type {Object<string,Function>}
 */
export const PAL = {
  IDX: hexFab.make(Cards.brown.lighten_5),
  STR: hexFab.make(Cards.lightGreen.accent_2),
  NUM: hexFab.make(Cards.deepOrange.accent_2),
  BOO: hexFab.make(Cards.teal.lighten_2),
  UDF: hexFab.make(Cards.brown.lighten_3),
  SYM: hexFab.make(Cards.blueGrey.lighten_2),
  BRK: hexFab.make(Cards.blue.accent_2),
  BRC: hexFab.make(Cards.amber.base),
  FNC: hexFab.make(Cards.green.accent_4),
}
