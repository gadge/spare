import { TableCollection } from '@foba/table'
import { says } from '@spare/logger'
import { Deco } from '../index'
import { Table } from '@analys/table'
import { iso } from '@vect/vector-init'

const table = TableCollection.flopShuffle() |>Table.from

table.pushColumn('chn', iso(table.ht, '五'))

table |> Deco({ top: 5, bottom: 3, left: 3, right: 1, fullAngle: true }) |> says['table']
