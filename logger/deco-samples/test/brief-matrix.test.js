import { logger, logNeL } from '@spare/logger'
import { Deco } from '../src/Deco'
import { METRO, OCEAN, SUBTLE } from '@palett/presets'
import { Foba } from '@foba/table'
import { tableToSamples } from '@analys/convert'

// const samples = Foba['BistroDutyRoster'] |> tableToSamples
const samples = Foba.flop() |> tableToSamples

samples |> Deco({ top: 2, bottom: 2, left: 3, right: 1 }) |> logNeL

samples |> Deco({ top: 4, bottom: 2, stringPreset: OCEAN }) |> logNeL

samples |> Deco({ left: 2, right: 2, stringPreset: OCEAN }) |> logNeL
