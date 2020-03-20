import { TableCollection } from '@foba/table'
import { tableToSamples } from '@analys/convert'
import { Deco } from '../index'
import { says } from '@palett/says'

const tables = Object.assign({},
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
  TableCollection.flopShuffle({ keyed: true }),
)

for (const [key, samples] of Object.entries(tables)) {
  samples|> tableToSamples |> Deco() |> says[key]
}
