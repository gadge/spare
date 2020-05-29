import { tableToSamples }  from '@analys/convert'
import { TableCollection } from '@foba/table'
import { says }            from '@palett/says'
import { APOS }            from '@spare/enum-quotes'
import { Deco }            from '../index'

const tables = Object.assign({},
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
)

for (const [key, samples] of Object.entries(tables)) {
  samples|> tableToSamples |> Deco({ quote: APOS }) |> says[key]
}
