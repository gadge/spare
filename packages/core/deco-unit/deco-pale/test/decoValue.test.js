import { Basics, Vectors } from '@spare/deco/test/assets/candidates'
import { says }            from '@spare/logger'
import { decoPale }        from '../index'

for (const [key, value] of Object.entries({
  ...Basics,
  ...Vectors,
  o: { 'mc\'q': 1, date: new Date(), vec: [[1], [2, 3]], ob: { a: '1.41', b: '3.14' } }
})) {
  decoPale(value, { loose: true }) |> says[key]
}
