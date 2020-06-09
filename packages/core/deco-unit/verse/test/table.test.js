import { TableCollection } from '@foba/table'
import { DITTO }           from '@spare/enum-quotes'
import { says }            from '@spare/logger'
import { Verse }           from '../src/Verse'

const table = TableCollection.flopShuffle()

Verse.table(table, { quote: DITTO }) |> says['table']
