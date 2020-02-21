import { simpleVectors } from '@foba/foo'
import { logger } from '@spare/logger'
import { delogger } from '@spare/deco'
import { vettro } from '@spare/vettro'

const arrs = simpleVectors({ h: 12 })
for (const [key, arr] of Object.entries(arrs)) {
  key |> logger
  vettro(arr, { head: 5, tail: 2, pad: true }) |> delogger
}
