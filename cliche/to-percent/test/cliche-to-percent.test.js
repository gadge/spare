import { toPercent } from '../src/toPercent'
import { logger } from '@spare/logger'

class ClicheToPercent {
  static test () {
    const candidates = [
      1.08, 0.05, 0.99, -0.52
    ]
    for (let candidate of candidates) {
      `[${candidate}] (${candidate |> toPercent})` |> logger
    }
  }
}

ClicheToPercent.test()
