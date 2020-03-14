import { Foba } from '@foba/table'
import { says } from '@spare/logger'
import { verseTable } from '../src/verse'

const table = Foba.flop()

table |> verseTable |> says['table']
