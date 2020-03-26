import { TableCollection } from '@foba/table'
import { says } from '@spare/logger'
import { Deco } from '../index'

const table = TableCollection.flopShuffle()

table |> Deco({ top: 5, bottom: 3, left: 3, right: 1 }) |> says['table']
