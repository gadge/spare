
import{ Foba } from '@foba/table'
import { says } from '@spare/logger'
import { Deco } from '../src/Deco'

const table = Foba.flop()

table |> Deco({ top: 5, bottom: 3, left: 3, right: 1 }) |> says['table']


