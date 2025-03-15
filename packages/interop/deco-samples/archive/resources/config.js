import { decoFlat }   from '@spare/deco-flat'
import { BRK }        from '@texting/enum-brackets'
import { COSP }       from '@texting/enum-chars'
import { COLUMNWISE } from '@vect/enum-matrix-directions'

// CONF_DECO_SAMPLES

export const CONFIG = {
  delim: COSP,
  bracket: BRK,
  indexed: true,
  read: decoFlat,
  direct: COLUMNWISE,
  ansi: true,
}