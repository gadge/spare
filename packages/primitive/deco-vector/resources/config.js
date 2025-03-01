import { decoFlat } from '@spare/deco-flat'
import { BRK }      from '@spare/enum-brackets'
import { COLF }     from '@texting/enum-chars'

// CONF_DECO_VECTOR

export const CONFIG = {
  dash: ') ',
  delim: COLF,
  bracket: BRK,
  indexed: false,
  read: decoFlat,
  ansi: true,
}