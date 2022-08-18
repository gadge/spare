import { FRESH, METRO, OCEAN }          from '@palett/presets'
import { COLF, COSP, LF, RTSP, SP, TB } from '@texting/enum-chars'
import { indexed }                      from '@vect/object-mapper'
import { It }                           from '../../target/Joins.js'
import { Typo }                         from '../../target/Typo.js'


const OBJECTS = {
  Empty: {},
  Single: {
    foo: 'bar',
  },
  BrentPrices: Object.fromEntries([
    [ '1988', 14.91 ],
    [ '1989', 18.23 ],
    [ '1997', 19.11 ],
    [ '2002', 24.99 ],
    [ '2009', 61.74 ],
    [ '2013', 108.56 ],
    [ '2018', 71.34 ]
  ]),
  MortalityRates: Object.fromEntries([
    [ 'InfectiousAndParasitic', 211.3 ],
    [ 'RespiratoryInfections', 63.7 ],
    [ 'LowerRespiratoryTractInfections', 62.4 ],
    [ 'HIV', 44.6 ],
    [ 'ChronicObstructivePulmonary', 44.1 ],
    [ 'PerinatalConditions', 39.6 ],
    [ 'Tuberculosis', 25.2 ]
  ]),
  Actresses: Object.fromEntries([
    [ 'The Piano', 'Holly Hunter' ],
    [ 'Titanic', 'Kate Winslet' ],
    [ 'Hilary and Jackie', 'Emily Watson' ],
    [ 'The Devil Wears Prada', 'Meryl Streep' ],
    [ 'Precious', 'Gabourey Sidibe' ]
  ])
}

const typo = new Typo({ fill: ' ', ansi: true, pres: { pos: FRESH, neg: OCEAN, str: METRO } })

// for (let [ key, obj ] of indexed(OBJECTS)) {
//   TB + key + RTSP + typo.object(obj, true, 1) |> console.log
// }

const WD = 32
const LINE = '+'.repeat(WD) + WD
for (let [ key, obj ] of indexed(OBJECTS)) {
  key + SP + typo.object(obj, WD, 0, key.length + 1) |> console.log
  LINE |> console.log
}