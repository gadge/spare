import { lange } from '@spare/lange'
import { iterate as iterateVector } from '@vect/vector-mapper'
import { joinVector } from './joinVector'

export const stringifyVector = function (vector, lv) {
  const { va, wa } = this
  if (lv < va) return joinVector(vector, lv)
  let rows = [], w = 0, row = []
  iterateVector(vector, item => {
    row.push(item), w += lange(item)
    if (w > wa) rows.push(row.join(', ')), row = [], w = 0
  })
  return rows.length > 1 ? joinVector(rows, lv) : vector.join(', ')
}
