import { CO, COSP, RTSP }  from '@spare/enum-chars'
import { lange }           from '@texting/lange'
import { joinLines }       from '@texting/liner'
import { LPad }            from '@texting/padder'
import { iterate, mutate } from '@vect/vector-mapper'
import { mutateKeyPad }    from './mutateKeyPad'


const lpad = LPad({ ansi: true })

export const renderEntries = function (entries, lv) {
  const
    vert = this.object?.vert ?? this.vert ?? 0,
    width = this.object?.width ?? this.width ?? 0,
    unit = this.object?.unit ?? this.unit ?? 0
  let pad
  const rows = (lv < vert || entries.some(([, v]) => lange(v) > unit) || !width) && (pad = mutateKeyPad(entries))
    ? mutate(entries, ([k, v]) => lpad(k, pad) + RTSP + v)
    : wrapEntries(entries, width)
  return rows.length > 1
    ? joinLines(rows, CO, lv)
    : rows.join(COSP)
}

export const wrapEntries = function (entries, width) {
  const lines = []
  let row = null, len = 0, kvp, sp = COSP.length
  iterate(entries, ([k, v]) => {
    len += lange(kvp = k + RTSP + v) + sp
    if (row && len > width) { lines.push(row.join(COSP)), row = null }
    if (!row) { row = [], len = 0 }
    row.push(kvp)
  })
  if (row?.length) lines.push(row.join(COSP))
  return lines
}




