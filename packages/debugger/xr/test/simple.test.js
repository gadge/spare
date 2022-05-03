import { deco as decoCrostab } from '@spare/deco-crostab'
import { deco as decoMatrix }  from '@spare/deco-matrix'
import { $, says }             from '../index'

says['MasterIO'](1080)
says['>> MasterIO'](2560)
says['MasterIO'](3840)

$['x'](24)['y'](16) |> says['MasterIO'].br('savePairsToExcel');
[ [ 1, 2, 3 ] ] |> decoMatrix |> says['  >> MasterIO']
const crostab = {
  side: [ '1', '2', '3' ],
  head: [ 'A', 'B', 'C' ],
  rows: [
    [ 0, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 0 ]
  ]
}
crostab  |> decoCrostab  |> says['  -- MasterIO'].br('crostab')