import { delogger }                     from '@spare/deco'
import { DA, SP }                       from '@spare/enum-chars'
import { DA as DA_FULL, SP as SP_FULL } from '@spare/enum-full-angle-chars'
import { APOS }                         from '@spare/enum-quotes'
import { DecoObject }                   from '@spare/logger'

const candidates = {
  DA: DA,
  DA_FULL: DA_FULL,
  SP: SP,
  SP_FULL: SP_FULL
}

candidates |> DecoObject({ quote: APOS }) |> delogger
