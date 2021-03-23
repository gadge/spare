import { LAVA, METRO } from '@palett/presets'
import { DecoConfig }  from '../src/decoConfig'

const config = {
  foo: true,
  bar: null
}

const additional = {
  foo: 1,
  bar: 2
}

DecoConfig
  .build(config)
  .replenishConfigs(additional)
  .resetPresets(LAVA)
  .assignPresets(LAVA, METRO)
  |> JSON.stringify |> console.log