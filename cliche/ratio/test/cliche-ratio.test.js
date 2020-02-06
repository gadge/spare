import { ClicheRatio } from '../src/ClicheRatio'
import { logger } from '@spare/logger'

class ClicheRatioTest {
  static test () {
    const candidates = [
      Math.PI, Math.E, Number.EPSILON, Number.NaN
    ]
    const ratio = new ClicheRatio(3)
    for (let candidate of candidates) {
      `[${candidate}] (${ratio.format(candidate)})` |> logger
    }
  }
}

ClicheRatioTest.test()
