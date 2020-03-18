import { logNeL } from '@spare/logger'
import { Deco } from '../index'
import { OCEAN } from '@palett/presets'
import { Foba } from '@foba/table'
import { tableToSamples } from '@analys/convert'
import { inferType } from '@typen/num-strict'
import { says } from '@palett/says'

const samples = Foba['BistroDutyRoster'] |> tableToSamples
// const samples = Foba.flop() |> tableToSamples

samples |> Deco({ top: 2, bottom: 2, left: 3, right: 1 }) |> logNeL

samples |> Deco({ top: 4, bottom: 2, stringPreset: OCEAN }) |> logNeL

const words= samples |> Deco({
  indexed: true,
  fields: ['name', 'day', 'served', ['sold', 'sell']],
  left: 2,
  right: 2,
  stringPreset: OCEAN,
  bracket: false,
  discrete: false
})
words |> says['BistroDutyRoster'].p(inferType(words))
