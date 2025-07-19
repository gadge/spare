import { deco as decoCrostab } from '@spare/deco-crostab'
import { deco as decoMatrix }  from '@spare/deco-matrix'
import { test }                from 'node:test'
import { $, says }             from '../src/index.js'

test('simple test', () => {
  says['MasterIO'](1080)
  says['>> MasterIO'](2560)
  says['  MasterIO'](3840)

  says['MasterIO']($['a'](8)['b'](16))
  says['MasterIO']($['c'](32)['d'](64))
  says['  >> MasterIO'](decoMatrix([[1, 2, 3]]))
  const crostab = {
    side: ['1', '2', '3'],
    head: ['A', 'B', 'C'],
    rows: [
      [1, 0, 0],
      [0, 10, 0],
      [0, 0, 100],
    ],
  }
  says['    << MasterIO'](decoCrostab(crostab))
})
