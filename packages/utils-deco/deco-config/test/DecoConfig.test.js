import { BOLD, ITALIC }        from '@palett/enum-font-effects'
import { LAVA, METRO, PLANET } from '@palett/presets'
import { DecoConfig }          from '@spare/preset-deco/src/DecoConfig'
import { deco }                from '@spare/deco'

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
  .resetPresets([LAVA, PLANET], [BOLD], true)
  // .assignPresets(LAVA, METRO)
  |> deco |> console.log

const configBeta = {
  foo: true,
  bar: null,
  presets: [LAVA, PLANET],
  effects: [ITALIC],
  full: true
}

DecoConfig
  .build(configBeta)
  |> deco |> console.log