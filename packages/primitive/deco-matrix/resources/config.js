import { decoFlat } from '@spare/deco-flat'
import { BRK }      from '@spare/enum-brackets'
import { COSP }     from '@texting/enum-chars'
import { ROWWISE }  from '@vect/enum-matrix-directions'

// CONF_DECO_MATRIX
export const CONFIG = {
  delim: COSP,
  bracket: BRK,
  read: decoFlat,
  direct: ROWWISE,
  ansi: true,
}