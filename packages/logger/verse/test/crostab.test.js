import { CrostabCollection } from '@foba/crostab'
import { logger } from '@spare/logger'
import { Verse } from '../src/Verse'
import { flopValue } from '@aryth/rand'

const crostab = CrostabCollection |> flopValue

crostab |> Verse.crostab |> logger
