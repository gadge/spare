import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { FRESH, METRO, OCEAN }                            from '@palett/presets'
import { LF, SP }                                         from '@texting/enum-chars'
import { indexed }                                        from '@vect/object-mapper'
import { Typo }                                           from '../../target/Typo.js'


const VECTORS = {
  empty: [],
  arithmetic: NumberVectorCollection.fibonacci(12),
  megaCity: StringVectorCollection.megaCities.slice(0, 16),
  textNum: NumberVectorCollection.primes(7).map(String),
  nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ],
}

const typo = new Typo({ fill: ' ', ansi: true, pres: { pos: FRESH, neg: OCEAN, str: METRO } })
// for (let [ key, vec ] of indexed(VECTORS)) {
//   TB + TB + key + SP + typo.vector(vec, null, 2) |> console.log
// }

const W = 16
const LINE = '+'.repeat(W) + W
for (let [ key, vec ] of indexed(VECTORS)) {
  // const iter = typo.groupVector(vec, W, key.length + 2, 2)
  // key + SP + '[' + It.chain(iter, LF) + ']'  |> console.log
  key + SP + typo.vector(vec, W, 2, key.length + 1) |> console.log
  LINE |> console.log
}
