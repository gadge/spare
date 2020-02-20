import { Foba } from '@foba/crostab'
import { delogger } from '@spare/deco'
import { COLUMNWISE } from '@vect/matrix'
import { deco } from '../src/deco'

const crostab = Foba.flop()

deco(crostab, { direct: COLUMNWISE, top: 5, bottom: 3, left: 3, right: 1 }) |> delogger


