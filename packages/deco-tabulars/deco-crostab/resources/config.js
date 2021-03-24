import { decoFlat }  from '@spare/deco-flat'
import { LF }        from '@spare/enum-chars'
import { POINTWISE } from '@vect/enum-matrix-directions'

export const CONF_DECO_CROSTAB = {
  delim: LF,
  read: decoFlat,
  ansi: true,
  direct: POINTWISE,
}