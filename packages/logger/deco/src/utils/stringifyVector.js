import { lange } from '@spare/lange'
import { joinLines } from '@spare/deco-util'
import { iterate as iterateVector } from '@vect/vector-mapper'
import { CO } from '@spare/enum-chars'

export const stringifyVector = function (vector, lv) {
  const { va, wa } = this
  if (lv < va) return joinLines(vector, lv)
  let rows = [], w = 0, row = []
  iterateVector(vector, item => {
    row.push(item), w += lange(item)
    if (w > wa) rows.push(row.join(', ')), row = [], w = 0
  })
  return rows.length > 1 ? joinLines(rows, CO, lv) : vector.join(', ')
}
