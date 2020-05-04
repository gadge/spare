import { delogger }                 from '@spare/deco'
import { DA, SP }                   from '@spare/enum-chars'
import { DASH as FADA, SP as FASP } from '@spare/enum-full-angle-chars'
import { APOS }                     from '@spare/enum-quotes'
import { DecoObject }               from '@spare/logger'

const candidates = {
  HADA: DA,
  FADA: FADA,
  HASP: SP,
  FASP: FASP
}

candidates |> DecoObject({ quote: APOS }) |> delogger
