import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { Presm }                                          from '@palett/pres'
import { PAGODA, PINE, PRETTY }                           from '@palett/presets'
import { SP }                                             from '@texting/enum-chars'
import { indexed }                                        from '@vect/object-mapper'
import { test }                                           from 'node:test'
import { Node }                                           from '../src/Node.js'

const VECTORS = {
  // empty: [],
  // arithmetic: NumberVectorCollection.fibonacci(12),
  // megaCity: StringVectorCollection.megaCities.slice(0, 16),
  // textNum: NumberVectorCollection.primes(7).map(String),
  // nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  // delta: [ 'Delta' ],
  // pearl: [ 'Pearl River Delta' ],
  alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  // misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  // combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ],
}

test('node vector', () => {
  const node = new Node({ fill: ' ', ansi: true, pres: Presm.build(PINE, PRETTY, PAGODA) })
  const WD = 48

  for (let [ key, vec ] of indexed(VECTORS)) {
    const formatted = node.vector(vec, WD, 2, key.length + 2)
    // console.log(node.presm)
    console.log(key + SP + formatted)
    console.log('+'.repeat(WD) + WD)
  }
  console.log('done')
})
