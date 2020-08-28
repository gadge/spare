import { tableToSamples }  from '@analys/convert'
import { TableCollection } from '@foba/table'
import { logNeL } from '@spare/logger'
import { Verse }  from '../src/Verse'

const samples = TableCollection.flopShuffle() |> tableToSamples

samples |> Verse.samples |> logNeL
