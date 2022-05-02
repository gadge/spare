import { oneself }          from '@ject/oneself'
import { DecoPale, logger } from '@spare/logger'
import { presetVector }     from '../dist/index.esm'

const p = {
  top: 2,
  bottom: 2,
}

presetVector(p) |> DecoPale({ cite: oneself })|> logger