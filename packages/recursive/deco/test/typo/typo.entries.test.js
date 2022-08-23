import { BESQUE, METRO, OCEAN } from '@palett/presets'
import { SP, TB }               from '@texting/enum-chars'
import { indexed }              from '@vect/object-mapper'
import { Typo }                 from '../../target/Typo.js'


const ENTRIES = {
  Empty: [],
  Single: [
    [ 'foo', 'bar' ]
  ],
  BrentPrices: [
    [ '1988', 14.91 ],
    [ '1989', 18.23 ],
    [ '1997', 19.11 ],
    [ '2002', 24.99 ],
    [ '2009', 61.74 ],
    [ '2013', 108.56 ],
    [ '2018', 71.34 ]
  ],
  MortalityRates: [
    [ 'InfectiousAndParasitic', 211.3 ],
    [ 'RespiratoryInfections', 63.7 ],
    [ 'LowerRespiratoryTractInfections', 62.4 ],
    [ 'HIV', 44.6 ],
    [ 'ChronicObstructivePulmonary', 44.1 ],
    [ 'PerinatalConditions', 39.6 ],
    [ 'Tuberculosis', 25.2 ]
  ],
  Actresses: [
    [ 'The Piano', 'Holly Hunter' ],
    [ 'Titanic', 'Kate Winslet' ],
    [ 'Hilary and Jackie', 'Emily Watson' ],
    [ 'The Devil Wears Prada', 'Meryl Streep' ],
    [ 'Precious', 'Gabourey Sidibe' ]
  ]
}

const typo = new Typo({ pres: { pos: BESQUE, neg: OCEAN, str: METRO } })

for (let [ key, ent ] of indexed(ENTRIES)) {
  TB + TB + key + SP + typo.entries(ent, false, 2) |> console.log
}