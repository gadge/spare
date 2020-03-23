import { logNeL } from '@spare/logger'
import { TableCollection } from '@foba/table'
import { tableToSamples } from '@analys/convert'
import { Verse } from '../src/Verse'

const samples = TableCollection.flopShuffle() |> tableToSamples

samples |> Verse.samples |> logNeL
