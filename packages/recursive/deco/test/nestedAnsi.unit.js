import { decoPale }           from '@spare/deco-pale'
import { decoString, logger } from '@spare/logger'
import { says }               from '@spare/xr'
import { hasAnsi }            from '@texting/lange'
import { iterate, mutate }    from '@vect/object-mapper'
import { Deco }               from '../index'

const o = {
  chef: 'chef',
  worker: 'worker',
  tournant: 'tournant',
  aboyeur: 'aboyeur',
}

mutate(o, decoString)
o |> decoPale |> logger

iterate(o, x => {
  hasAnsi(x) |> says[x]
})

o |> Deco({ vert: 1 }) |> logger
