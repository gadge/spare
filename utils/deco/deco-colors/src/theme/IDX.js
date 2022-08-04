import { Cards }    from '@palett/cards'
import { hslToHex } from '@palett/convert'

export const IDX = {
  0: Preset.build(hslToHex([75, 90, 85]), hslToHex([89, 99, 72]), Cards.grey.lighten_4),
  1: Preset.build(hslToHex([80, 88, 87]), hslToHex([83, 98, 71]), Cards.grey.lighten_4),
  2: Preset.build(hslToHex([93, 87, 82]), hslToHex([93, 97, 70]), Cards.grey.lighten_3),
  3: Preset.build(hslToHex([103, 86, 82]), hslToHex([103, 96, 69]), Cards.grey.lighten_2),
  4: Preset.build(hslToHex([113, 85, 82]), hslToHex([113, 95, 68]), Cards.grey.lighten_1),
  5: Preset.build(hslToHex([123, 84, 82]), hslToHex([123, 94, 68]), Cards.grey.base),
  6: Preset.build(hslToHex([133, 83, 82]), hslToHex([133, 93, 68]), Cards.grey.darken_1),
  7: Preset.build(hslToHex([143, 82, 82]), hslToHex([143, 92, 68]), Cards.grey.darken_2),
}



