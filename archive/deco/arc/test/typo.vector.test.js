import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { FRESH, METRO, OCEAN }                            from '@palett/presets'
import { COSP }                                           from '@texting/enum-chars'
import { indexed }                                        from '@vect/object-mapper'
import { Typo }                                           from '../src/Typo.js'

const VECTORS = {
  empty: [],
  arithmetic: NumberVectorCollection.fibonacci(12),
  stringed: StringVectorCollection.megaCities.slice(0, 7),
  textNum: NumberVectorCollection.primes(7).map(String),
  nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ],
}

const typo = new Typo({ fill: ' ', ansi: true, pres: { pos: FRESH, neg: OCEAN, str: METRO } })
for (let [ key, vec ] of indexed(VECTORS)) {
  key |> console.log;
  // vec |> console.log;
  ('[ ' + typo.renderVector(vec).join(COSP) + ' ]') |> console.log
}
