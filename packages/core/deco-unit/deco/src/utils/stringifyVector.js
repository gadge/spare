import { lange } from '@spare/lange'
import { joinLines } from '@spare/liner'
import { iterate as iterateVector } from '@vect/vector-mapper'
import { CO, COSP } from '@spare/enum-chars'

export const stringifyVector = function (vector, lv) {
  const { va, wa } = this
  if (lv < va) return joinLines(vector, CO, lv)
  let rows = [], w = 0, row = []
  iterateVector(vector, item => {
    row.push(item), w += lange(item)
    if (w > wa) rows.push(row.join(COSP)), row = [], w = 0
  })
  return rows.length > 1 ? joinLines(rows, CO, lv) : vector.join(COSP)
}
