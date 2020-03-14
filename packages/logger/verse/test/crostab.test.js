import { Foba } from '@foba/crostab'
import { logger } from '@spare/logger'
import { Verse } from '../src/Verse'

const crostab = Foba.flop()

crostab |> Verse.crostab.bind(Verse) |> logger
