import { TableCollection } from '@foba/table'
import { says }            from '@spare/logger'
import { Verse }           from '../src/Verse'

const table = TableCollection.flopShuffle()

table |> Verse.table |> says['table']
