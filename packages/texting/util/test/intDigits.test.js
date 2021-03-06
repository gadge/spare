import { simpleVectors } from '@foba/foo'
import { delogger }      from '@spare/deco'
import { logger }        from '@spare/logger'
import { vettro }        from '@spare/vector-margin'

const arrs = simpleVectors({ h: 12 })
for (const [key, arr] of Object.entries(arrs)) {
  key |> logger
  vettro(arr, { head: 5, tail: 2, pad: true }) |> delogger
}
