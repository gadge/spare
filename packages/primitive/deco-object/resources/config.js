import { decoFlat }   from '@spare/deco-flat'
import { BRC }        from '@spare/enum-brackets'
import { COLF, RTSP } from '@spare/enum-chars'

// CONF_DECO_OBJECT

export const CONFIG = {
  dash: RTSP,
  delim: COLF,
  bracket: BRC,
  read: decoFlat,
  ansi: true,
}