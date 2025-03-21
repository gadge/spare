import { BESQUE, METRO, OCEAN } from '@palett/presets'
import { SP }                   from '@texting/enum-chars'
import { indexed }              from '@vect/object-mapper'
import { test }                 from 'node:test'
import { Node }                 from '../src/Node.js'

const ENTRIES = {
  Empty: [],
  Single: [
    [ 'foo', 'bar' ],
  ],
  BrentPrices: [
    [ '1988', 14.91 ],
    [ '1989', 18.23 ],
    [ '1997', 19.11 ],
    [ '2002', 24.99 ],
    [ '2009', 61.74 ],
    [ '2013', 108.56 ],
    [ '2018', 71.34 ],
  ],
  MortalityRates: [
    [ 'InfectiousAndParasitic', 211.3 ],
    [ 'RespiratoryInfections', 63.7 ],
    [ 'LowerRespiratoryTractInfections', 62.4 ],
    [ 'HIV', 44.6 ],
    [ 'ChronicObstructivePulmonary', 44.1 ],
    [ 'PerinatalConditions', 39.6 ],
    [ 'Tuberculosis', 25.2 ],
  ],
  Actresses: [
    [ 'The Piano', 'Holly Hunter' ],
    [ 'Titanic', 'Kate Winslet' ],
    [ 'Hilary and Jackie', 'Emily Watson' ],
    [ 'The Devil Wears Prada', 'Meryl Streep' ],
    [ 'Precious', 'Gabourey Sidibe' ],
  ],
}

test('node entries', () => {
  const node = Node.build(BESQUE, OCEAN, METRO)
  console.log(node.dim, node.hasX, node.hasY, node.hasZ)
  for (let [ key, ent ] of indexed(ENTRIES)) {
    // console.log(demo(node.pbd, 5))
    console.log(key + SP + node.entries(ent, NaN, 0))
  }
})
