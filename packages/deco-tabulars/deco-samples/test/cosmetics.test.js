import { tableToSamples }       from '@analys/convert'
import { TableCollection }      from '@foba/table'
import { FRESH, METRO, SUBTLE } from '@palett/presets'
import { deco }                 from '@spare/deco'
import { BRACKET }              from '@spare/enum-brackets'
import { logger }    from '@spare/logger'
import { cosmetics } from '../src/cosmetics'

const samples = TableCollection.AeroEngineSpecs |> tableToSamples
cosmetics.call({
  top: 4,
  bottom: 4,
  left: 3,
  right: 1,
  indexed: true,
  presets: [FRESH, METRO, SUBTLE],
  bracket: BRACKET
}, samples) |> deco |> logger