import { max }   from '@aryth/comparer'
import { Lange } from '@spare/lange'
import { stat }  from '@vect/columns-stat'

export const columnWidth = (mx, ansi) => {
  const len = Lange(ansi)
  return stat.call({ init: () => 0, acc: (a, b) => max(a, len(b)) }, mx)
}
