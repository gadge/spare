import { oneself }          from '@ject/oneself'
import { DecoPale, logger } from '@spare/logger'
import { presetVector }     from '../functions/presetVector.js'
import { test } from 'node:test'

const p = {
  top: 2,
  bottom: 2,
}

presetVector(p) |> DecoPale({ cite: oneself })|> logger