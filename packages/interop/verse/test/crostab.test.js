import { flopValue }         from '@aryth/rand'
import { CrostabCollection } from '@foba/crostab'
import { DecoPale }          from '@spare/deco-pale'
import { logger }            from '@spare/logger'
import { ditto }             from '@spare/quote'
import { Verse }             from '../src/Verse.js'
import { test } from 'node:test'

const crostab = flopValue(CrostabCollection)

logger(Verse.crostab(
  crostab,
  { keyRead: DecoPale({ quote: ditto }), read: DecoPale({ quote: ditto }) }
))
