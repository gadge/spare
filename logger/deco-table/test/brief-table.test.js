import { Foba } from '@foba/crostab'
import { delogger } from '@spare/deco'
import { says } from '@spare/logger'
import { Deco } from '../src/Deco'

const crostab = Foba.flop()

crostab |> Deco({ top: 5, bottom: 3, left: 3, right: 1 }) |> says.table


