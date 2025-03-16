import {
  BLI_OFF, BLI_ON, BOL_OFF, BOL_ON, CRO_OFF, CRO_ON, CSI, DIM_OFF, DIM_ON, FORE_DEF, FORE_INI, HID_OFF, HID_ON, INV_OFF,
  INV_ON, ITA_OFF, ITA_ON, SGR, UND_OFF, UND_ON,
} from '@palett/enum-ansi-codes'
import { SC } from '@palett/util-ansi'

export function initAnsi(effects) {
  let head = '', tail = ''
  if (effects) for (let t of effects) {
    t === 'bold' ? (head += BOL_ON + SC, tail += BOL_OFF + SC) // BOLD
      : t === 'dim' ? (head += DIM_ON + SC, tail += DIM_OFF + SC) // DIM
        : t === 'italic' ? (head += ITA_ON + SC, tail += ITA_OFF + SC) // ITALIC
          : t === 'underline' ? (head += UND_ON + SC, tail += UND_OFF + SC) // UNDERLINE
            : t === 'blink' ? (head += BLI_ON + SC, tail += BLI_OFF + SC) // BLINK
              : t === 'inverse' ? (head += INV_ON + SC, tail += INV_OFF + SC) // INVERSE
                : t === 'hide' ? (head += HID_ON + SC, tail += HID_OFF + SC) // HIDE
                  : t === 'strike' ? (head += CRO_ON + SC, tail += CRO_OFF + SC) // STRIKE
                    : void 0
  }
  this.head = CSI + head + FORE_INI + SC
  this.tail = CSI + FORE_DEF + tail + SGR
}


