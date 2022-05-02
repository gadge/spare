import { decoFlat }  from '@spare/deco-flat'
import { LF }        from '@spare/enum-chars'
import { POINTWISE } from '@vect/enum-matrix-directions'

export const CONFIG = {
  delim: LF,
  read: decoFlat,
  ansi: true,
  direct: POINTWISE,
}