import { tableToSamples }  from '@analys/convert'
import { TableCollection } from '@foba/table'
import { logNeL }          from '@spare/logger'
import { Verse }           from '../src/Verse.js'
import { test } from 'node:test'

const samples = tableToSamples(TableCollection.flopShuffle())

logNeL(Verse.samples(samples))
