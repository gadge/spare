import { LAVA, METRO } from '@palett/presets'
import { DecoConfig }  from '../src/DecoConfig'

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
  .assignConfigs(additional)
  .resetPresets(LAVA)
  .assignPresets(LAVA, METRO)
  |> JSON.stringify |> console.log