import { hslToHex } from '@palett/convert'
import { Cards } from '@palett/cards'

export const IDX = {
  0: { max: hslToHex([75, 90, 85]), min: hslToHex([89, 99, 72]), na: Cards.grey.lighten_4 },
  1: { max: hslToHex([80, 88, 87]), min: hslToHex([83, 98, 71]), na: Cards.grey.lighten_4 },
  2: { max: hslToHex([93, 87, 82]), min: hslToHex([93, 97, 70]), na: Cards.grey.lighten_3 },
  3: { max: hslToHex([103, 86, 82]), min: hslToHex([103, 96, 69]), na: Cards.grey.lighten_2 },
  4: { max: hslToHex([113, 85, 82]), min: hslToHex([113, 95, 68]), na: Cards.grey.lighten_1 },
  5: { max: hslToHex([123, 84, 82]), min: hslToHex([123, 94, 68]), na: Cards.grey.base },
  6: { max: hslToHex([133, 83, 82]), min: hslToHex([133, 93, 68]), na: Cards.grey.darken_1 },
  7: { max: hslToHex([143, 82, 82]), min: hslToHex([143, 92, 68]), na: Cards.grey.darken_2 },
}



