import { BESQUE, OCEAN, SUBTLE } from '@palett/presets'
import { test }                  from 'node:test'
import { Denode }                from '../src/Denode.js'

const VECTORS = {
  empty: [],
  nest: [ [] ],
  dual: [ [], [] ],
  vec: [ 0, 1, 2, 3, 4, 5 ],
  row: [ 7, 8, 11, 14, 15, 15, 16, 16 ],
  list: [
    'Evija',
    'Speedtail',
    'Valhalla',
    'SF90Stradale',
    'SiánFKP37',
    'Jesko',
    'Valkyrie',
    'Battista',
    'TSR-S',
    'One',
    'ChallengerDemon',
    'Chiron',
    'Regera',
    'AgeraRS',
    'LaFerrari',
    'P1',
    '918Spyder',
    'VeyronSuperSport',
    'UltimateAeroTT',
    'ST1',
    'CCR'
  ],
  quotes: [
    'Prince Andrew Bolkónski, the little princess\' husband. He was a very handsome young man, of medium height, with firm, clearcut features. Everything about him, from his weary, bored expression to his quiet, measured step, offered a most striking contrast to his quiet, little wife.',
    'Every action of theirs, that seems to them an act of their own free will, is in an historical sense not free at all, but in bondage to the whole course of previous history, and predestined from all eternity.',
    'The strongest of all warriors are these two — Time and Patience.'
  ],
  simple_column: [
    [ 7 ],
    [ 18 ],
    [ 28 ]
  ],
  matrix: [
    [ 2, 3, 5, 6, 7, 8 ],
    [ 500, 410, 66.2, -419.12, -766.06, -640.41 ],
    [ 50, 117.3, 174.89, 174.98, 59.68, -211 ]
  ],
  cubic: [
    [
      [ 0, 1, 2, 3, 4, 5 ],
      [ 1, 1, 2, 3, 5, 8 ],
      [ -4.669, -3, -1.732, 1.732, 3, 4.669 ]
    ], [
      [ 2, 3, 5, 7, 11, 13 ],
      [ 1, 1, 2, 3, 5, 8 ],
      [ 1, 1, 2, 3, 5, 8 ]
    ]
  ]
}

const WD = 54
const LINE = '+'.repeat(WD) + WD
const deco = new Denode({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: OCEAN, str: SUBTLE }, vt: 1, th: WD })

test('deco vectors unit', () => {
  console.log(LINE)
  console.log(deco.node(VECTORS, 0))
  console.log(LINE)
})
