import { BESQUE, DECANTE } from '@palett/presets'
import { indexed }         from '@vect/object-mapper'
import { test }       from 'node:test'
import { decoString } from '../index.js'

const STRINGS = {
  'Hamlet AIS2L72': 'Thou know\'st \'tis common; all that lives must die,\n' +
    'Passing through nature to eternity.',
  'The Two Gentlemen of Verona AIIIS1L178': 'Except I be by Sylvia in the night,\n' +
    'There is no music in the nightingale.',
  'King Lear AIVS6L55': '**Thy life\'s a miracle.**',
  'Some Like It Hot': 'Nobody\'s perfect.',
  'Dr. Strangelove': 'Gentlemen, you can\'t fight in here! This is the war room!',
  'The Dark Knight': 'Why so serious?',
  Terminatrix: 'Terminator 3 Rise of the Machines',
  MechanicalHound: 'Fahrenheit 451',
  MANTIS: 'M.A.N.T.I.S.',
}

test('deco-string', () => {
  const WD = 36
  const LINE = '+'.repeat(WD) + WD
  for (const [ key, text ] of indexed(STRINGS)) {
    const conf = {
      pres: BESQUE,
      thres: WD,
      indent: 2,
      surge: 1,
    }
    console.log(key)
    console.log(decoString.call(conf, text)) // , { pres: { pos: SUMMER, neg: DECANTE, str: SUBTLE }, thres: 36 }
    console.log(LINE)
  }
  console.log('DONE')
})



