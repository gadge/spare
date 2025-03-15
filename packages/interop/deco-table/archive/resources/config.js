import { decoFlat }   from '@spare/deco-flat'
import { LF }         from '@texting/enum-chars'
import { COLUMNWISE } from '@vect/enum-matrix-directions'

// CONF_DECO_TABLE

export const CONFIG = {
  delim: LF,
  read: decoFlat,
  direct: COLUMNWISE,
  ansi: true,
}