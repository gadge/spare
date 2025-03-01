import { decoFlat } from '@spare/deco-flat'
import { BRK }      from '@spare/enum-brackets'
import { LF }       from '@texting/enum-chars'

// CONF_DECO_ENTRIES

export const CONFIG = {
  dash: ' > ',
  delim: LF,
  bracket: BRK,
  read: decoFlat,
  ansi: true,
}