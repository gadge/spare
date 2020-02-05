import { Greys, Palett } from 'palett'
import { Hatsu } from 'hatsu'

const { hex } = Hatsu

/**
 *
 * @type {Object<string,function>}
 */
export const PAL = {
  IDX: hex(Greys.brown.lighten_5),
  STR: hex(Palett.lightGreen.accent_2),
  NUM: hex(Palett.deepOrange.accent_2),
  BOO: hex(Palett.teal.lighten_2),
  UDF: hex(Palett.brown.lighten_3),
  BRK: hex(Palett.blue.accent_2),
  BRC: hex(Palett.amber.base),
  FNC: hex(Palett.green.accent_4),
}
