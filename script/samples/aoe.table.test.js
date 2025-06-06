import { BESQUE, METRO, OCEAN, SUBTLE } from '@palett/presets'
import { decoTable }                    from '../index'

const AoEIIUnitsAttackByStages = {
  side: [ 'Imperial', 'Castle', 'Feudal', 'Dark' ],
  head: [ 'Barracks', 'Archery Range', 'Stable', 'Siege Workshop' ],
  rows: [
    [ 9.8, 10, 10, 31.3 ],
    [ 6.7, 4.7, 7.3, 18 ],
    [ 4.5, 3, 5, NaN ],
    [ 4, NaN, NaN, NaN ]
  ]
}

const WD = 36
const LINE = '+'.repeat(WD) + WD
const CONF = {
  fill: ' ',
  ansi: true,
  pres: { pos: BESQUE, neg: OCEAN, str: METRO },
  keys: { pos: BESQUE, neg: OCEAN, str: SUBTLE },
}

decoTable(AoEIIUnitsAttackByStages, CONF, 2) |> console.log