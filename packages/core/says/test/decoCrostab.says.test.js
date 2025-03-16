import { CrostabCollection } from '@foba/crostab'
import { decoCrostab }       from '@spare/logger'
import { says }              from '../index.js'
import { test }              from 'node:test'

const crostab = CrostabCollection.flopShuffle()

test('decoCrostab says', () => {
  says['crostab'](decoCrostab(crostab))
})

