import { logNeL } from '@spare/logger'
import { Foba } from '@foba/table'
import { tableToSamples } from '@analys/convert'
import { Verse } from '../src/Verse'

const samples = Foba['BistroDutyRoster'] |> tableToSamples

samples |> Verse.samples |> logNeL
