import { deco as decoCrostab } from '@spare/deco-crostab'
import { deco as decoMatrix }  from '@spare/deco-matrix'

import { test } from 'node:test'
import { says } from '../index.js'


test('simple test', () => {
  says['MasterIO'](1080)
  says['>> MasterIO'](2560)
  says['  MasterIO'](3840)

  says['MasterIO'].br('savePairsToExcel')['x'](24)['y'](16)
  says['  >> MasterIO'](decoMatrix([ [ 1, 2, 3 ] ]))
  const crostab = {
    side: [ '1', '2', '3' ],
    head: [ 'A', 'B', 'C' ],
    rows: [
      [ 0, 0, 0 ],
      [ 0, 0, 0 ],
      [ 0, 0, 0 ]
    ]
  }
  says['  -- MasterIO'].br('crostab')[''](decoCrostab(crostab))
})
