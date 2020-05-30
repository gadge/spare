import { says }               from '@palett/says'
import { decoPale }           from '@spare/deco-pale'
import { hasAnsi }            from '@spare/lange'
import { decoString, logger } from '@spare/logger'
import { iterate, mutate }    from '@vect/object-mapper'
import { deco }               from '..'

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

o |> deco |> logger
