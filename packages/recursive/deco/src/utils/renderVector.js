import { CO, COSP }  from '@spare/enum-chars'
import { lange }     from '@texting/lange'
import { joinLines } from '@texting/liner'
import { iterate }   from '@vect/vector-mapper'

export const renderVector = function (vector, lv) {
  const
    vert = this.array?.vert ?? this.vert ?? 0,
    width = this.array?.width ?? this.width ?? 0,
    unit = this.array?.unit ?? this.unit ?? 0
  const rows = lv < vert || vector.some(x => lange(x) > unit) || !width
    ? vector
    : wrapVector(vector, width)
  return rows.length > 1
    ? joinLines(rows, CO, lv)
    : vector.join(COSP)
}

export const wrapVector = function (vector, width) {
  const lines = []
  let row = null, len = 0, sp = COSP.length
  iterate(vector, item => {
    // row.push(item), len += lange(item) + sp
    // if (len > width) rows.push(row.join(COSP)), row = [], len = 0
    len += lange(item) + sp
    if (row && len > width) lines.push(row.join(COSP)), row = null
    if (!row) row = [], len = 0
    row.push(item)
  })
  return lines
}
