import { flopValue }         from '@aryth/rand'
import { CrostabCollection } from '@foba/crostab'
import { logger }            from '@spare/logger'
import { Verse }             from '../src/Verse'

const crostab = CrostabCollection |> flopValue

Verse.crostab(crostab, {}) |> logger
