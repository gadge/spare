import { Foba } from '@foba/crostab'
import { deca, DecoEntries, decoEntries, logger, says } from '@spare/logger'
import { tableToSamples } from '@analys/convert'
import { mapper } from '@vect/vector-mapper'

const samples = Foba.flop() |> tableToSamples

const entriesCollection = mapper(samples, sample => Object.entries(sample))
for (let entries of entriesCollection) {
  entries |> DecoEntries({ dash: ':', delimiter: ', ' }) |> logger
}
samples |> deca({ wo: 256 }) |> logger

// crostab |> Deco({ top: 5, bottom: 3, left: 3, right: 1 }) |> says['table']


