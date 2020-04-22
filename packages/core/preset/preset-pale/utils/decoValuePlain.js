import { typ } from '@typen/typ'
import { COSP, RT } from '@spare/enum-chars'
import { OBJ } from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT } from '@typen/enum-object-types'
import { formatDate } from '@valjoux/format-date'
import { formatTime } from '@valjoux/format-time'
import { logger } from '@spare/logger'
import { brace, bracket } from '@spare/bracket'

export function decoValue (o) {
  let t
  if ((t = typeof o) === OBJ && (t = typ(o))) {
    if (t === ARRAY) return bracket(o.map(decoValue).join(COSP))
    if (t === OBJECT) return brace(Object.entries(o).map((([k, v]) => k + RT + decoValue(v))).join(COSP))
    if (t === DATE) return formatDate(o) + '\'' + formatTime(o)
  }
  return o
}

const a = [[1], [2]]
const b = { foo: 1, bar: 2, date: new Date(), kha: [[1], [2, 3]] }
decoValue(a) |> logger
decoValue(b) |> logger








