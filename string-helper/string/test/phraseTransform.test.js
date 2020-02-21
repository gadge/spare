import { dashedToCamel } from '../src/phraseTransform'
import { logger } from '@spare/logger'
import { DASHED } from '../src/enums/PhraseReg'

const dashedToUpperCamel = (dashed, de = '') =>
  dashed
    ?.match(DASHED)
    ?.map(wd => wd[0].toUpperCase() + wd.slice(1).toLowerCase())
    .join(de)
  ?? dashed

export class PhraseTransformTest {
  static test () {
    const candidates = [
      'logger-vector',
      'logger-entries',
      'logger-matrix',
      'logger-table',
      'logger-crostab',
    ]
    for (let candidate of candidates) dashedToUpperCamel(candidate) |> logger
    '' |> logger
    for (let candidate of candidates) candidate.toUpperCase() |> logger
  }
}

PhraseTransformTest.test()
