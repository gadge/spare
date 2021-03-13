import { max }   from '@aryth/comparer'
import { Lange } from '@spare/lange'
import { maxBy } from '@vect/vector-indicator'

export const fieldWidth = (name, list, ansi) => {
  const lange = Lange(ansi)
  return max(lange(name), maxBy(list, lange))
}