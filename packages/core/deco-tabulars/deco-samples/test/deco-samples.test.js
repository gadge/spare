import { tableToSamples }  from '@analys/convert'
import { TableCollection } from '@foba/table'
import { FRESH, PLANET }   from '@palett/presets'
import { says }            from '@palett/says'
import { Deco }            from '../index'

const tables = Object.assign({},
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
)

for (const [key, samples] of Object.entries(tables)) {
  samples|> tableToSamples |> Deco({ presets: [FRESH, PLANET] }) |> says[key]
}
