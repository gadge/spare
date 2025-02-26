import { CrostabCollection } from '@foba/crostab'
import { decoCrostab }       from '@spare/logger'
import { says }              from '../index'

const crostab = CrostabCollection.flopShuffle()

says['crostab'](decoCrostab(crostab))
